import { useEffect } from 'react';
import gsap from 'gsap';

const LENS_RADIUS = 30;   // radius of the magnifier lens in px (matches half of #ball size)
const MAX_SCALE  = 1.7;   // max zoom at dead-centre of lens
const WORD_ATTR  = 'data-mag-word';

/** Wraps every word in a text node with a <span data-mag-word> */
function wrapTextNodes(root: HTMLElement) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (['SCRIPT','STYLE','NOSCRIPT','TEXTAREA','INPUT'].includes(tag)) return NodeFilter.FILTER_REJECT;
      if (parent.hasAttribute(WORD_ATTR)) return NodeFilter.FILTER_REJECT;
      if (parent.closest('#magic-cursor')) return NodeFilter.FILTER_REJECT;
      if (!node.textContent?.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes: Text[] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) textNodes.push(n as Text);

  textNodes.forEach((textNode) => {
    const parent = textNode.parentNode!;
    const parts = textNode.textContent!.split(/(\s+)/);
    const frag = document.createDocumentFragment();
    parts.forEach((part) => {
      if (/^\s+$/.test(part) || part === '') {
        frag.appendChild(document.createTextNode(part));
      } else {
        const span = document.createElement('span');
        span.setAttribute(WORD_ATTR, '1');
        span.textContent = part;
        frag.appendChild(span);
      }
    });
    parent.replaceChild(frag, textNode);
  });
}

/** Restores word-wrapped spans back to plain text nodes */
function unwrapTextNodes() {
  document.querySelectorAll<HTMLElement>(`[${WORD_ATTR}]`).forEach((span) => {
    const parent = span.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(span.textContent || ''), span);
      parent.normalize();
    }
  });
}

const MagicCursor: React.FC = () => {
  useEffect(() => {
    const cursorBall = document.getElementById('ball');
    const hoverElements  = document.querySelectorAll<HTMLAnchorElement>('a');
    const hoverElements2 = document.querySelectorAll<HTMLElement>('.feature-project');

    // Wrap all text words after a tick (let React finish rendering)
    const wrapTimer = setTimeout(() => wrapTextNodes(document.body), 200);

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Move cursor ball
      if (cursorBall) {
        gsap.to(cursorBall, {
          duration: 0.55,
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          ease: 'power3.out',
        });
      }

      // Magnifier: scale every word span based on distance from cursor centre
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const words = document.querySelectorAll<HTMLElement>(`[${WORD_ATTR}]`);
        words.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const cx = rect.left + rect.width  / 2;
          const cy = rect.top  + rect.height / 2;
          const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2);

          const inHeading = !!el.closest('h1, h2, h3');

          if (dist < LENS_RADIUS) {
            const t = 1 - dist / LENS_RADIUS;           // 0 at edge → 1 at centre
            const scale = 1 + (MAX_SCALE - 1) * t * t;

            el.style.transform  = `scale(${scale.toFixed(3)})`;
            el.style.display    = 'inline-block';
            el.style.zIndex     = '2';
            el.style.position   = 'relative';
            el.style.willChange = 'transform';

            if (inHeading) {
              // Neon-purple spotlight glow — builds from edge to centre
              const near  = Math.round(t * 22);          // inner glow size
              const far   = Math.round(t * 44);          // outer halo size
              const alpha = (0.55 + t * 0.45).toFixed(2);
              el.style.textShadow   = `0 0 ${near}px rgba(168,85,247,${alpha}), 0 0 ${far}px rgba(109,40,217,0.35)`;
              el.style.color        = `rgb(${Math.round(210 + t * 45)}, ${Math.round(200 + t * 55)}, 255)`;
              el.style.letterSpacing = `${(t * 1.5).toFixed(2)}px`;
            }
          } else {
            el.style.transform  = 'scale(1)';
            el.style.zIndex     = '';
            el.style.position   = '';
            el.style.willChange = '';

            if (inHeading) {
              el.style.textShadow    = '';
              el.style.color         = '';
              el.style.letterSpacing = '';
            }
          }
        });
      });
    };

    const handleHoverEnter = () => {
      if (cursorBall) {
        cursorBall.classList.add('hovered');
        gsap.to(cursorBall, { duration: 0.3, scale: 1.4, ease: 'power2.out' });
      }
    };

    const handleHoverLeave = () => {
      if (cursorBall) {
        cursorBall.classList.remove('hovered');
        gsap.to(cursorBall, { duration: 0.3, scale: 1, ease: 'power2.out' });
      }
    };

    const handleProjectEnter = () => {
      if (cursorBall) {
        cursorBall.style.opacity = '0';
        cursorBall.classList.add('hide-mouse');
      }
    };

    const handleProjectLeave = () => {
      if (cursorBall) {
        cursorBall.style.opacity = '1';
        cursorBall.classList.remove('hide-mouse');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverEnter);
      el.addEventListener('mouseleave', handleHoverLeave);
    });
    hoverElements2.forEach((el) => {
      el.addEventListener('mouseenter', handleProjectEnter);
      el.addEventListener('mouseleave', handleProjectLeave);
    });

    return () => {
      clearTimeout(wrapTimer);
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
      hoverElements2.forEach((el) => {
        el.removeEventListener('mouseenter', handleProjectEnter);
        el.removeEventListener('mouseleave', handleProjectLeave);
      });
      unwrapTextNodes();
    };
  }, []);

  return (
    <div id="magic-cursor">
      <div id="ball"></div>
    </div>
  );
};

export default MagicCursor;

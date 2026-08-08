import React from 'react';
import { Link } from 'react-router-dom';

interface DraggableTileProps {
    className: string;
    style: React.CSSProperties;
    title?: string;
    children?: React.ReactNode;
}

const DraggableTile: React.FC<DraggableTileProps> = ({ className, style, title, children }) => {
    const [pos, setPos] = React.useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = React.useState(false);
    const dragStartRef = React.useRef({ startX: 0, startY: 0, posAtStart: { x: 0, y: 0 } });

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.button !== 0) return;
        e.preventDefault();
        e.currentTarget.setPointerCapture(e.pointerId);
        setIsDragging(true);

        dragStartRef.current = {
            startX: e.clientX,
            startY: e.clientY,
            posAtStart: { ...pos }
        };
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const deltaX = e.clientX - dragStartRef.current.startX;
        const deltaY = e.clientY - dragStartRef.current.startY;

        setPos({
            x: dragStartRef.current.posAtStart.x + deltaX,
            y: dragStartRef.current.posAtStart.y + deltaY
        });
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        e.currentTarget.releasePointerCapture(e.pointerId);
        setIsDragging(false);
    };

    const outerStyle: React.CSSProperties = {
        position: 'absolute',
        top: style.top,
        left: style.left,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        zIndex: isDragging ? 60 : undefined,
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        touchAction: 'none'
    };

    const innerStyle: React.CSSProperties = {
        animationDelay: style.animationDelay
    };

    return (
        <div
            style={outerStyle}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onDragStart={(e) => e.preventDefault()}
            className="pointer-events-auto"
        >
            <div
                className={`${className} w-[76px] h-[76px] rounded-xl flex items-center justify-center`}
                style={innerStyle}
                title={title}
            >
                {children}
            </div>
        </div>
    );
};

const HeroV1 = () => {
    return (
        <div
            id="hero"
            className="w-full min-h-screen relative flex flex-col justify-between overflow-hidden font-urbanist"
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(139, 92, 246, 0.08) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(139, 92, 246, 0.08) 1px, transparent 1px),
                    radial-gradient(circle at 10% 90%, rgba(139, 92, 246, 0.35), transparent 55%),
                    radial-gradient(circle at 90% 90%, rgba(168, 85, 247, 0.15), transparent 45%)
                `,
                backgroundSize: '60px 60px, 60px 60px, 100% 100%, 100% 100%',
                backgroundColor: '#ffffff'
            }}
        >
            {/* keyframe inject style block */}
            <style>{`
                @keyframes float-slow {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-8px);
                    }
                }
                .floating-tile {
                    animation: float-slow 6s ease-in-out infinite;
                    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
                }
                .active-tile {
                    background-color: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(229, 231, 235, 0.6);
                    box-shadow: none;
                }
                .active-tile svg, .active-tile div, .active-tile i {
                    opacity: 0.35;
                    transition: opacity 0.3s ease, filter 0.3s ease;
                }
                .empty-tile {
                    background-color: rgba(249, 250, 251, 0.3);
                    border: 1px solid rgba(229, 231, 235, 0.3);
                    opacity: 0.4;
                }
                .floating-tile:hover {
                    animation-play-state: paused !important;
                    transform: scale(1.08) translateY(-4px) !important;
                    z-index: 50 !important;
                }
                .active-tile:hover {
                    background-color: #ffffff !important;
                    border-color: rgba(139, 92, 246, 0.5) !important;
                    box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.12), 0 8px 10px -6px rgba(139, 92, 246, 0.12) !important;
                }
                .active-tile:hover svg, .active-tile:hover div, .active-tile:hover i {
                    opacity: 1 !important;
                }
            `}</style>

            {/* Integrated Header Menu */}
            <header className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 flex items-center justify-between z-30 relative">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 select-none">
                    <span className="text-purple-600 font-bold italic text-4xl leading-none">Z</span>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-purple-950 tracking-tight leading-none">zenorix</span>
                        <span className="text-[9px] text-purple-400 font-semibold tracking-wider uppercase mt-1">Design. Build. Deploy</span>
                    </div>
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Home', 'Services', 'About Us', 'Why Us', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-neutral-700 hover:text-purple-600 text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Enquire Now Header Action */}
                <a
                    href="#contact"
                    className="bg-purple-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-purple-700 transition-all duration-300 shadow-[0_4px_12px_rgba(139,92,246,0.2)] hover:shadow-[0_6px_16px_rgba(139,92,246,0.35)]"
                >
                    Enquire Now
                </a>
            </header>

            {/* Main Hero Content */}
            <div className="flex-grow flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto z-20 pb-20 pt-10">
                <h1
                    className="text-4xl sm:text-5xl md:text-[60px] font-semibold tracking-tight text-center leading-[1.15] max-w-4xl"
                    style={{ color: '#5b21b6', fontFamily: 'var(--font_urbanist)' }}
                >
                    Your Technology Partner For <br className="hidden md:inline" />
                    The Next Stage Of Growth.
                </h1>

                <p className="mt-8 text-neutral-600 text-base sm:text-lg md:text-xl max-w-3xl font-medium leading-relaxed">
                    Whether you're launching a startup, modernizing your business, or automating operations - we build technology that works.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 z-20">
                    <a
                        href="#why-zenorix"
                        className="bg-white text-purple-600 border border-purple-600 px-6 py-2.5 rounded-full font-semibold text-base hover:bg-purple-50 transition-all duration-300 hover:scale-105 text-center min-w-[170px]"
                    >
                        Explore Services
                    </a>
                    <a
                        href="#contact"
                        className="bg-purple-600 text-white px-6 py-2.5 rounded-full font-semibold text-base hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-[0_4px_14px_rgba(139,92,246,0.2)] text-center min-w-[170px]"
                    >
                        Enquire Now
                    </a>
                </div>
            </div>

            {/* Left Staggered Integration Cluster */}
            <div className="absolute left-6 2xl:left-16 top-[63%] -translate-y-1/2 w-[428px] h-[428px] pointer-events-none hidden xl:block z-10">
                {/* Row 0 */}
                <DraggableTile 
                    className="empty-tile floating-tile"
                    style={{ top: '0px', left: '44px', animationDelay: '0s' }}
                />
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '0px', left: '132px', animationDelay: '-1.2s' }}
                    title="Notion"
                >
                    <i className="fa-brands fa-notion text-[32px] text-neutral-800"></i>
                </DraggableTile>

                {/* Row 1 */}
                <DraggableTile 
                    className="empty-tile floating-tile"
                    style={{ top: '88px', left: '88px', animationDelay: '-2.4s' }}
                />
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '88px', left: '176px', animationDelay: '-3.6s' }}
                    title="Vue.js"
                >
                    <i className="fa-brands fa-vuejs text-[32px] text-[#41b883]"></i>
                </DraggableTile>
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '88px', left: '264px', animationDelay: '-4.8s' }}
                    title="Node.js"
                >
                    <i className="fa-brands fa-node-js text-[32px] text-[#339933]"></i>
                </DraggableTile>

                {/* Row 2 */}
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '176px', left: '132px', animationDelay: '-0.6s' }}
                    title="AWS"
                >
                    <i className="fa-brands fa-aws text-[32px] text-[#ff9900]"></i>
                </DraggableTile>
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '176px', left: '220px', animationDelay: '-1.8s' }}
                    title="Python"
                >
                    <i className="fa-brands fa-python text-[32px] text-[#3776ab]"></i>
                </DraggableTile>

                {/* Row 3 */}
                <DraggableTile 
                    className="empty-tile floating-tile"
                    style={{ top: '264px', left: '176px', animationDelay: '-3s' }}
                />
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '264px', left: '264px', animationDelay: '-4.2s' }}
                    title="HTML5"
                >
                    <i className="fa-brands fa-html5 text-[32px] text-[#e34f26]"></i>
                </DraggableTile>
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '264px', left: '352px', animationDelay: '-5.4s' }}
                    title="CSS3"
                >
                    <i className="fa-brands fa-css3-alt text-[32px] text-[#1572b6]"></i>
                </DraggableTile>

                {/* Row 4 */}
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '352px', left: '220px', animationDelay: '-0.9s' }}
                    title="JavaScript"
                >
                    <i className="fa-brands fa-js text-[32px] text-[#f7df1e]"></i>
                </DraggableTile>
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '352px', left: '308px', animationDelay: '-2.1s' }}
                    title="Docker"
                >
                    <i className="fa-brands fa-docker text-[32px] text-[#0db7ed]"></i>
                </DraggableTile>
            </div>

            {/* Right Staggered Integration Cluster */}
            <div className="absolute right-6 2xl:right-16 top-[63%] -translate-y-1/2 w-[428px] h-[428px] pointer-events-none hidden xl:block z-10">
                {/* Row 0 */}
                <DraggableTile 
                    className="empty-tile floating-tile"
                    style={{ top: '0px', left: '308px', animationDelay: '-0.5s' }}
                />
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '0px', left: '220px', animationDelay: '-1.7s' }}
                    title="React"
                >
                    <i className="fa-brands fa-react text-[32px] text-[#087ea4] animate-[spin_12s_linear_infinite]"></i>
                </DraggableTile>

                {/* Row 1 */}
                <DraggableTile 
                    className="empty-tile floating-tile"
                    style={{ top: '88px', left: '264px', animationDelay: '-2.9s' }}
                />
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '88px', left: '176px', animationDelay: '-4.1s' }}
                    title="Figma"
                >
                    <i className="fa-brands fa-figma text-[32px] text-[#a259ff]"></i>
                </DraggableTile>
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '88px', left: '88px', animationDelay: '-5.3s' }}
                    title="Git"
                >
                    <i className="fa-brands fa-git-alt text-[32px] text-[#f05032]"></i>
                </DraggableTile>

                {/* Row 2 */}
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '176px', left: '220px', animationDelay: '-1.1s' }}
                    title="GitHub"
                >
                    <i className="fa-brands fa-github text-[32px] text-neutral-800"></i>
                </DraggableTile>
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '176px', left: '132px', animationDelay: '-2.3s' }}
                    title="Stack Overflow"
                >
                    <i className="fa-brands fa-stack-overflow text-[32px] text-[#f48024]"></i>
                </DraggableTile>

                {/* Row 3 */}
                <DraggableTile 
                    className="empty-tile floating-tile"
                    style={{ top: '264px', left: '176px', animationDelay: '-3.5s' }}
                />
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '264px', left: '88px', animationDelay: '-4.7s' }}
                    title="Slack"
                >
                    <i className="fa-brands fa-slack text-[32px] text-[#4a154b]"></i>
                </DraggableTile>
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '264px', left: '0px', animationDelay: '-5.9s' }}
                    title="Cloudflare"
                >
                    <i className="fa-brands fa-cloudflare text-[32px] text-[#f38020]"></i>
                </DraggableTile>

                {/* Row 4 */}
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '352px', left: '132px', animationDelay: '-1.4s' }}
                    title="Stripe"
                >
                    <i className="fa-brands fa-stripe text-[32px] text-[#635bff]"></i>
                </DraggableTile>
                <DraggableTile 
                    className="active-tile floating-tile cursor-pointer"
                    style={{ top: '352px', left: '44px', animationDelay: '-2.6s' }}
                    title="Codepen"
                >
                    <i className="fa-brands fa-codepen text-[32px] text-neutral-800"></i>
                </DraggableTile>
            </div>
        </div>
    );
};

export default HeroV1;
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

interface NavHeaderProps {
  items?: NavItem[];
}

const defaultItems: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "FAQs", href: "/faqs" },
  { label: "Book Now", href: "/book-now" },
];

function NavHeader({ items = defaultItems }: NavHeaderProps) {
  const [position, setPosition] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative flex w-fit rounded-full border border-purple-700/50 bg-white/5 backdrop-blur-sm p-1 gap-0"
      onMouseLeave={() =>
        setPosition((pv) => ({ ...pv, opacity: 0 }))
      }
      style={{ margin: 0, padding: "4px", listStyle: "none" }}
    >
      {items.map((item) => (
        <NavTab key={item.href} setPosition={setPosition} href={item.href}>
          {item.label}
        </NavTab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

const NavTab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer select-none"
      style={{ listStyle: "none" }}
    >
      <Link
        to={href}
        className="block px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 mix-blend-difference"
        style={{
          color: isActive ? "#a855f7" : "#ffffff",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="absolute z-0 top-1 bottom-1 rounded-full pointer-events-none"
      style={{
        background:
          "linear-gradient(135deg, #4c1d95 0%, #2e0854 50%, #1c0036 100%)",
        boxShadow: "0 0 16px 2px rgba(109, 40, 217, 0.35)",
      }}
    />
  );
};

export { NavHeader };
export default NavHeader;

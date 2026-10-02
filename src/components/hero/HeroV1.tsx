import React from 'react';
import { Link } from 'react-router-dom';
import ZenorixZ from '../common/ZenorixZ';

interface DraggableTileProps {
    className?: string;
    style?: React.CSSProperties;
    title?: string;
    isEmpty?: boolean;
    children?: React.ReactNode;
}

const DraggableTile: React.FC<DraggableTileProps> = ({ className = '', style = {}, title, isEmpty = false, children }) => {
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
                className={`w-[60px] h-[60px] md:w-[68px] md:h-[68px] rounded-2xl flex items-center justify-center transition-all duration-300 floating-tile ${isEmpty
                    ? 'bg-white/[0.05] border border-white/15 backdrop-blur-[2px] opacity-40 hover:opacity-75'
                    : 'bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:bg-white/[0.18] hover:border-white/40 hover:shadow-[0_12px_36px_0_rgba(255,255,255,0.15)] group'
                    } ${className}`}
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
            className="w-full min-h-[92vh] lg:min-h-screen relative flex flex-col justify-between overflow-hidden font-outfit select-none"
            style={{
                background: "radial-gradient(ellipse 120% 95% at 50% 0%, #7e19e7 0%, #6d17cf 35%, #6214a8 70%, #540ea2 100%) no-repeat fixed",
                color: '#ffffff'
            }}
        >
            {/* Ambient Background Styling & Giant Zenorix Z Watermark */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Center Radial Glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[100px] opacity-35"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(233, 213, 255, 0.4), rgba(168, 85, 247, 0.15), transparent 70%)'
                    }}
                />

                {/* Giant Zenorix Z in background */}
                <div className="absolute right-[-15%] sm:right-[-10%] lg:right-[0%] top-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] lg:w-[1200px] xl:w-[1350px] opacity-20 pointer-events-none select-none transition-all duration-700">
                    <ZenorixZ glow className="w-full h-auto" />
                </div>
            </div>

            {/* Custom Keyframe Styles for Smooth Floating */}
            <style>{`
                @keyframes float-gentle {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-9px);
                    }
                }
                .floating-tile {
                    animation: float-gentle 6s ease-in-out infinite;
                }
                .floating-tile:hover {
                    animation-play-state: paused !important;
                    transform: scale(1.08) translateY(-4px) !important;
                }
            `}</style>

            {/* Top Pill Navigation Bar */}
            <header className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-5 pb-2 z-30 relative">
                <div className="w-full px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/20 border-t-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] flex items-center justify-between transition-all duration-300 hover:bg-white/[0.11] hover:border-white/30">
                    {/* Logo */}
                    <Link to="/" className="flex items-center self-center select-none group leading-none my-auto">
                        <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                            <img src="/assets/images/zenorix3d's.png" alt="Zenorix Logo" className="w-auto h-7 sm:h-8 object-contain invert drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] block -translate-y-[1px]" />
                        </div>
                    </Link>

                    {/* Nav Items */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
                        {[
                            { name: 'HOME', href: '#' },
                            { name: 'SERVICES', href: '#services' },
                            { name: 'ABOUT US', href: '#about' },
                            { name: 'WHY US', href: '#why-zenorix' },
                            { name: 'CONTACT', href: '#contact' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-white/85 hover:text-white text-[13px] xl:text-sm font-urbanist font-medium tracking-wide transition-colors duration-200"
                                style={{ fontFamily: "'Urbanist', sans-serif" }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Enquire Now Header Action Button */}
                    <a
                        href="#contact"
                        className="bg-white text-[#7e19e7] hover:text-[#6a11b0] hover:bg-white/95 font-semibold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:scale-105 active:scale-95"
                        style={{ fontFamily: "'Degular Demo', 'Degular', sans-serif" }}
                    >
                        Enquire Now
                    </a>
                </div>
            </header>

            {/* Main Hero Center Content */}
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-6xl xl:max-w-7xl mx-auto z-20 pt-8 pb-16">
                <h1
                    className="font-medium text-white w-full max-w-6xl mx-auto"
                    style={{
                        fontFamily: "'Clash Display Variable', 'Clash Display', sans-serif",
                        fontWeight: 500,
                        fontSize: 'clamp(32px, 5.2vw, 83.95px)',
                        letterSpacing: '-2.1px',
                        lineHeight: 'clamp(38px, 5.6vw, 84px)'
                    }}
                >
                    <span className="sm:whitespace-nowrap">Your Technology Partner For</span><br />
                    <span className="sm:whitespace-nowrap">The Next Stage Of Growth.</span>
                </h1>

                <p
                    className="mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto font-normal leading-relaxed"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                >
                    Whether you're launching a startup, modernizing your business, or automating<br className="hidden sm:inline" />
                    operations - we build technology that works.
                </p>

                {/* CTA Action Buttons */}
                <div className="flex flex-row items-center justify-center gap-5 mt-9 z-20">
                    <a
                        href="#services"
                        className="bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:border-white/50 text-center min-w-[160px] sm:min-w-[180px]"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                        Explore Services
                    </a>
                    <a
                        href="#contact"
                        className="bg-white text-[#7e19e7] hover:text-[#6a11b0] hover:bg-white/95 font-semibold px-9 py-3.5 rounded-full text-sm sm:text-base shadow-[0_8px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 text-center min-w-[160px] sm:min-w-[180px]"
                        style={{ fontFamily: "'Degular Demo', 'Degular', sans-serif" }}
                    >
                        Enquire Now
                    </a>
                </div>
            </div>

            {/* Left Staggered Integration Cluster */}
            <div className="absolute left-3 xl:left-8 2xl:left-14 top-[56%] -translate-y-1/2 w-[390px] h-[390px] pointer-events-none hidden lg:block z-10">
                {/* Row 0 */}
                <DraggableTile
                    isEmpty
                    style={{ top: '0px', left: '30px', animationDelay: '0s' }}
                />
                <DraggableTile
                    isEmpty
                    style={{ top: '0px', left: '110px', animationDelay: '-1.4s' }}
                />

                {/* Row 1 */}
                <DraggableTile
                    isEmpty
                    style={{ top: '78px', left: '70px', animationDelay: '-2.8s' }}
                />
                <DraggableTile
                    title="Vite / Vue"
                    style={{ top: '78px', left: '150px', animationDelay: '-4.2s' }}
                >
                    {/* Vite / Vue V icon */}
                    <svg className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m3 5 9 14L21 5" />
                        <path d="m8 5 4 6 4-6" />
                    </svg>
                </DraggableTile>
                <DraggableTile
                    title="Node.js"
                    style={{ top: '78px', left: '230px', animationDelay: '-5.6s' }}
                >
                    {/* Node.js Hexagon */}
                    <svg className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2z" />
                        <path d="M12 12v8" />
                        <path d="m12 12 8-4.5" />
                        <path d="M12 12 4 7.5" />
                    </svg>
                </DraggableTile>

                {/* Row 2 */}
                <DraggableTile
                    title="AWS"
                    style={{ top: '156px', left: '110px', animationDelay: '-0.7s' }}
                >
                    {/* AWS Logo / smile */}
                    <div className="flex flex-col items-center justify-center text-white/80 group-hover:text-white transition-colors">
                        <span className="text-[13px] font-black tracking-tight leading-none lowercase">aws</span>
                        <svg className="w-6 h-2 mt-0.5" viewBox="0 0 24 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M2 2c6 4 14 4 20 0" />
                        </svg>
                    </div>
                </DraggableTile>
                <DraggableTile
                    title="Python"
                    style={{ top: '156px', left: '190px', animationDelay: '-2.1s' }}
                >
                    {/* Python */}
                    <svg className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.9 1a5.1 5.1 0 0 0-5.1 5.1v1.8h5.2v.6H4.2A4.2 4.2 0 0 0 0 12.7a4.2 4.2 0 0 0 4.2 4.2h1.4v-2a3.6 3.6 0 0 1 3.6-3.6h5.2a2 2 0 0 0 2-2V6.1A5.1 5.1 0 0 0 11.9 1zm-1.8 1.8a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm1.8 20.2a5.1 5.1 0 0 0 5.1-5.1v-1.8h-5.2v-.6h7.8a4.2 4.2 0 0 0 4.2-4.2 4.2 4.2 0 0 0-4.2-4.2h-1.4v2a3.6 3.6 0 0 1-3.6 3.6h-5.2a2 2 0 0 0-2 2v3.2a5.1 5.1 0 0 0 5.1 5.1zm1.8-1.8a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" />
                    </svg>
                </DraggableTile>

                {/* Row 3 */}
                <DraggableTile
                    isEmpty
                    style={{ top: '234px', left: '150px', animationDelay: '-3.5s' }}
                />
                <DraggableTile
                    title="HTML5"
                    style={{ top: '234px', left: '230px', animationDelay: '-4.9s' }}
                >
                    {/* HTML5 Shield */}
                    <div className="relative flex items-center justify-center text-white/80 group-hover:text-white">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 3l1.8 16.2L12 21l6.2-1.8L20 3H4z" />
                        </svg>
                        <span className="absolute text-[11px] font-bold">5</span>
                    </div>
                </DraggableTile>
                <DraggableTile
                    title="CSS3"
                    style={{ top: '234px', left: '310px', animationDelay: '-6.3s' }}
                >
                    {/* CSS3 Shield */}
                    <div className="relative flex items-center justify-center text-white/80 group-hover:text-white">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 3l1.8 16.2L12 21l6.2-1.8L20 3H4z" />
                        </svg>
                        <span className="absolute text-[11px] font-bold">3</span>
                    </div>
                </DraggableTile>

                {/* Row 4 */}
                <DraggableTile
                    title="JavaScript"
                    style={{ top: '312px', left: '190px', animationDelay: '-1.1s' }}
                >
                    {/* JS */}
                    <div className="flex items-center justify-center font-bold text-[15px] border-2 border-white/80 rounded-md px-1 py-0.5 leading-none text-white/80 group-hover:text-white group-hover:border-white">
                        JS
                    </div>
                </DraggableTile>
                <DraggableTile
                    title="Docker"
                    style={{ top: '312px', left: '270px', animationDelay: '-2.5s' }}
                >
                    {/* Docker Whale */}
                    <svg className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 14c1.5 2.5 4.5 4 8 4 6 0 9-3.5 9-7 0-.5-.1-1-.2-1.5-1.5.5-3.3.5-4.8 0V8H4v6z" />
                        <path d="M6 10h2v2H6z" />
                        <path d="M9 10h2v2H9z" />
                        <path d="M12 10h2v2h-2z" />
                        <path d="M9 7h2v2H9z" />
                        <path d="M12 7h2v2h-2z" />
                    </svg>
                </DraggableTile>
            </div>

            {/* Right Staggered Integration Cluster */}
            <div className="absolute right-3 xl:right-8 2xl:right-14 top-[56%] -translate-y-1/2 w-[390px] h-[390px] pointer-events-none hidden lg:block z-10">
                {/* Row 0 */}
                <DraggableTile
                    title="React"
                    style={{ top: '0px', left: '230px', animationDelay: '-0.8s' }}
                >
                    {/* React Atom */}
                    <svg className="w-8 h-8 text-white/80 group-hover:text-white animate-[spin_15s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                </DraggableTile>
                <DraggableTile
                    isEmpty
                    style={{ top: '0px', left: '310px', animationDelay: '-2.2s' }}
                />

                {/* Row 1 */}
                <DraggableTile
                    title="Polygon / Web3"
                    style={{ top: '78px', left: '150px', animationDelay: '-3.6s' }}
                >
                    {/* Diamond / Polygon */}
                    <svg className="w-7 h-7 text-white/80 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 2 8 4.5v11L12 22 4 17.5v-11L12 2z" />
                        <path d="M12 2v20" />
                    </svg>
                </DraggableTile>
                <DraggableTile
                    title="Figma"
                    style={{ top: '78px', left: '230px', animationDelay: '-5.0s' }}
                >
                    {/* Figma Logo */}
                    <svg className="w-7 h-7 text-white/80 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="15.5" cy="8.5" r="3.5" />
                        <path d="M5 5a3.5 3.5 0 0 1 7 0v7H8.5A3.5 3.5 0 0 1 5 8.5V5z" />
                        <path d="M5 12a3.5 3.5 0 0 1 7 0v7a3.5 3.5 0 0 1-7 0v-7z" />
                    </svg>
                </DraggableTile>
                <DraggableTile
                    isEmpty
                    style={{ top: '78px', left: '310px', animationDelay: '-6.4s' }}
                />

                {/* Row 2 */}
                <DraggableTile
                    title="Database / Stack"
                    style={{ top: '156px', left: '190px', animationDelay: '-1.3s' }}
                >
                    {/* Layered Stack */}
                    <svg className="w-7 h-7 text-white/80 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 8l10-5 10 5-10 5-10-5z" />
                        <path d="M2 13l10 5 10-5" />
                        <path d="M2 18l10 5 10-5" />
                    </svg>
                </DraggableTile>
                <DraggableTile
                    title="GitHub"
                    style={{ top: '156px', left: '270px', animationDelay: '-2.7s' }}
                >
                    {/* GitHub */}
                    <svg className="w-7 h-7 text-white/80 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                </DraggableTile>

                {/* Row 3 */}
                <DraggableTile
                    title="Cloud"
                    style={{ top: '234px', left: '110px', animationDelay: '-4.1s' }}
                >
                    {/* Cloud */}
                    <svg className="w-7 h-7 text-white/80 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                </DraggableTile>
                <DraggableTile
                    title="Slack"
                    style={{ top: '234px', left: '190px', animationDelay: '-5.5s' }}
                >
                    {/* Slack */}
                    <svg className="w-7 h-7 text-white/80 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                    </svg>
                </DraggableTile>
                <DraggableTile
                    isEmpty
                    style={{ top: '234px', left: '270px', animationDelay: '-6.9s' }}
                />

                {/* Row 4 */}
                <DraggableTile
                    title="Three.js / WebGL"
                    style={{ top: '312px', left: '150px', animationDelay: '-1.8s' }}
                >
                    {/* Isometric Cube */}
                    <svg className="w-7 h-7 text-white/80 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                </DraggableTile>
                <DraggableTile
                    title="Stripe"
                    style={{ top: '312px', left: '230px', animationDelay: '-3.2s' }}
                >
                    {/* Stripe lowercase text */}
                    <span className="text-[14px] font-bold tracking-tight lowercase text-white/80 group-hover:text-white">
                        stripe
                    </span>
                </DraggableTile>
            </div>
        </div>
    );
};

export default HeroV1;
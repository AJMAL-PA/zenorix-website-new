import React, { useState } from "react";
import { Cpu, Sparkles, Zap, TrendingUp, ShieldCheck, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";
import whyData from "../../jsonData/why/WhyZenorixData.json";
import { openContactPopup } from "../utilities/ContactPopup";

const iconMap = {
    Cpu,
    Sparkles,
    Zap,
    TrendingUp,
    ShieldCheck,
    Headphones,
};

interface WhyItem {
    id: number;
    number: string;
    icon: string;
    title: string;
    description: string;
    isFeatured?: boolean;
}

const WhyCard: React.FC<{ item: WhyItem }> = ({ item }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Sparkles;

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setIsHovered(true);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isHovered) {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
            setIsHovered(true);
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setIsHovered(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative p-5 sm:p-6 lg:p-6 rounded-[6px] overflow-hidden border transition-all duration-500 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] cursor-pointer ${
                isHovered
                    ? "shadow-2xl shadow-[#932FEE]/25 border-[#983AED]/40"
                    : "bg-white border-[#E5E5E5] shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-[#DEE2E6]"
            }`}
        >
            {/* Circular Expanding Ripple from Mouse Entry Point with 3-Color Gradient + Soft Center White Glow */}
            <span
                className="absolute pointer-events-none rounded-full z-0"
                style={{
                    width: "1600px",
                    height: "1600px",
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    background: "radial-gradient(circle at 45% 45%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.06) 40%, transparent 65%), linear-gradient(135deg, #983AED 0%, #932FEE 50%, #6702C2 100%)",
                    transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
                    transition: isHovered
                        ? "transform 0.95s cubic-bezier(0.2, 0.9, 0.3, 1)"
                        : "transform 0.75s cubic-bezier(0.2, 0.9, 0.3, 1)",
                }}
            />

            {/* Ambient Soft White Center Highlight on Hover */}
            <div
                className={`absolute inset-0 pointer-events-none rounded-[6px] transition-opacity duration-700 z-0 ${
                    isHovered ? "opacity-100" : "opacity-0"
                }`}
                style={{
                    background: "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.05) 45%, transparent 70%)",
                }}
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                    {/* Top Row: Icon Container and Number */}
                    <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                        <div
                            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-[6px] flex items-center justify-center transition-all duration-300 ${
                                isHovered
                                    ? "bg-white/20 text-[#FFFFFF] backdrop-blur-md shadow-sm border border-white/25"
                                    : "bg-[#F3E8FF] text-[#932FEE]"
                            }`}
                        >
                            <IconComponent className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                        </div>
                        <span
                            className={`text-xs sm:text-sm font-normal tracking-wider transition-colors duration-300 ${
                                isHovered ? "text-white/80" : "text-neutral-400"
                            }`}
                        >
                            {item.number}
                        </span>
                    </div>

                    {/* Title */}
                    <h3
                        className={`text-lg sm:text-xl font-medium tracking-tight leading-[1.2] mb-2 transition-colors duration-300 ${
                            isHovered ? "text-white" : "text-neutral-950"
                        }`}
                        style={{ fontWeight: 500 }}
                    >
                        {item.title}
                    </h3>

                    {/* Description */}
                    <p
                        className={`text-xs sm:text-[13px] font-normal leading-relaxed mb-3.5 sm:mb-4 transition-colors duration-300 ${
                            isHovered ? "text-white/90" : "text-neutral-500"
                        }`}
                    >
                        {item.description}
                    </p>
                </div>

                {/* Card Footer */}
                <div className="mt-auto pt-1">
                    <div
                        className={`w-full h-px mb-3 transition-colors duration-300 ${
                            isHovered ? "bg-white/20" : "bg-[#E5E5E5]"
                        }`}
                    />
                    <div className="flex items-center justify-between">
                        <span
                            className={`text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium transition-colors duration-300 ${
                                isHovered ? "text-white/80" : "text-neutral-400"
                            }`}
                            style={{ fontWeight: 500 }}
                        >
                            ZENORIX STANDARD
                        </span>
                        <CheckCircle2
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors duration-300 ${
                                isHovered ? "text-white/90" : "text-neutral-400"
                            }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const WhyZenorix = () => {
    return (
        <section className="why-zenorix-sec pt-8 sm:pt-12 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-12 lg:px-[72px] bg-[#FAFAFC] text-neutral-900 relative overflow-hidden font-degular w-full" id="why-zenorix">
            <div className="max-w-[1680px] 2xl:max-w-[1880px] w-full mx-auto relative z-10">
                
                {/* Header: 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end mb-10 sm:mb-14">
                    <div className="lg:col-span-7 flex flex-col items-start">
                        {/* Subtitle Badge */}
                        <div className="flex items-center gap-2 mb-3">
                            <svg className="w-2.5 h-2.5 text-[#8A2CE0] fill-current" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <span className="text-[11px] sm:text-xs font-medium uppercase tracking-widest text-neutral-500" style={{ fontWeight: 500 }}>
                                Why Choose Us
                            </span>
                        </div>
                        
                        {/* Main Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 leading-[1.15]" style={{ fontWeight: 500 }}>
                            Why Businesses Choose <br />
                            <span className="text-[#8A2CE0]">Zenorix</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-end">
                        <p className="text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed max-w-lg" style={{ fontWeight: 500 }}>
                            We combine thoughtful design, reliable technology, and business-focused development to build digital solutions that are made to deliver real value.
                        </p>
                    </div>
                </div>

                {/* 6 Reason Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
                    {whyData.map((item) => (
                        <WhyCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Bottom Callout Banner */}
                <div className="mt-12 sm:mt-16 rounded-[6px] bg-gradient-to-r from-[#8A2CE0] via-[#7d24cd] to-[#6d1bb9] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl shadow-[#8A2CE0]/20 text-white">
                    <div className="flex flex-col items-start">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight" style={{ fontWeight: 500 }}>
                            Have a project in mind? Let's build it.
                        </h4>
                        <p className="text-xs sm:text-sm text-white/90 mt-1 font-medium">
                            Tell us what you're trying to achieve, and we'll help you figure out the right digital solution.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={openContactPopup}
                        className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 border border-white/30 text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm transition-all duration-300 hover:scale-105 shrink-0 backdrop-blur-sm cursor-pointer"
                    >
                        <span>Start a Conversation</span>
                        <span className="w-6 h-6 rounded-full bg-white text-[#8A2CE0] flex items-center justify-center">
                            <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default WhyZenorix;


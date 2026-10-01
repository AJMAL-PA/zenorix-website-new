import { Cpu, Sparkles, Zap, TrendingUp, ShieldCheck, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import whyData from "../../jsonData/why/WhyZenorixData.json";

const iconMap = {
    Cpu,
    Sparkles,
    Zap,
    TrendingUp,
    ShieldCheck,
    Headphones,
};

const WhyZenorix = () => {
    return (
        <section className="why-zenorix-sec py-16 sm:py-20 lg:py-28 px-6 sm:px-10 lg:px-16 2xl:px-24 bg-[#FAFAFC] text-neutral-900 relative overflow-hidden font-outfit w-full" id="why-zenorix">
            <div className="max-w-[1680px] 2xl:max-w-[1880px] w-full mx-auto relative z-10">
                
                {/* Header: 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-12 sm:mb-16">
                    <div className="lg:col-span-7 flex flex-col items-start">
                        {/* Subtitle Badge */}
                        <div className="flex items-center gap-2 mb-3">
                            <svg className="w-2.5 h-2.5 text-[#8B5CF6] fill-current" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500">
                                Why Choose Us
                            </span>
                        </div>
                        
                        {/* Main Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.15]">
                            Why Businesses Choose <br />
                            <span className="text-[#8B5CF6]">Zenorix</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-end">
                        <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-lg">
                            We combine thoughtful design, reliable technology, and business-focused development to build digital solutions that are made to deliver real value.
                        </p>
                    </div>
                </div>

                {/* 6 Reason Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {whyData.map((item) => {
                        const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Sparkles;
                        const isFeatured = item.isFeatured;

                        if (isFeatured) {
                            return (
                                <div
                                    key={item.id}
                                    className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white flex flex-col justify-between shadow-xl shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]"
                                >
                                    <div>
                                        {/* Card Top: Icon and Number */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-11 h-11 rounded-xl bg-white/20 text-white flex items-center justify-center backdrop-blur-sm">
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-semibold text-white/70">
                                                {item.number}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2.5">
                                            {item.title}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="pt-4 border-t border-white/20 flex items-center justify-between mt-auto">
                                        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-white/80">
                                            Zenorix Standard
                                        </span>
                                        <CheckCircle2 className="w-4 h-4 text-white/80" />
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div
                                key={item.id}
                                className="group p-7 sm:p-8 rounded-2xl bg-white border border-neutral-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                            >
                                <div>
                                    {/* Card Top: Icon and Number */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-11 h-11 rounded-xl bg-[#F4EEFF] text-[#8B5CF6] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#8B5CF6] group-hover:text-white">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-semibold text-neutral-400 group-hover:text-[#8B5CF6] transition-colors">
                                            {item.number}
                                        </span>
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-bold text-neutral-950 mb-2.5 group-hover:text-[#8B5CF6] transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Card Footer */}
                                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto">
                                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-neutral-400 group-hover:text-neutral-600 transition-colors">
                                        Zenorix Standard
                                    </span>
                                    <CheckCircle2 className="w-4 h-4 text-neutral-400 group-hover:text-[#8B5CF6] transition-colors" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Callout Banner */}
                <div className="mt-12 sm:mt-16 rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-[#854CE6] to-[#7C3AED] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl shadow-purple-500/15 text-white">
                    <div className="flex flex-col items-start">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                            Have a project in mind? Let's build it.
                        </h4>
                        <p className="text-xs sm:text-sm text-white/85 mt-1 font-normal">
                            Tell us what you're trying to achieve, and we'll help you figure out the right digital solution.
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 border border-white/30 text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm transition-all duration-300 hover:scale-105 shrink-0 backdrop-blur-sm"
                    >
                        <span>Start a Conversation</span>
                        <span className="w-6 h-6 rounded-full bg-white text-[#8B5CF6] flex items-center justify-center">
                            <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default WhyZenorix;

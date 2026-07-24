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
        <section className="why-zenorix-sec py-20 md:py-28 px-6 sm:px-12 lg:px-[72px] bg-black text-white relative overflow-hidden border-t border-white/10" id="why-zenorix">
            {/* Ambient Purple Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-950/20 blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-950/15 blur-[120px] pointer-events-none rounded-full" />

            <div className="max-w-[1640px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 md:mb-20">
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <svg className="w-3.5 h-3.5 text-purple-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold">
                                Why Choose Us
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15] text-white">
                            Why Leading Brands Partner With <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent font-medium">Zenorix</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
                            We combine deep technical expertise with bespoke design to craft scalable, high-converting digital solutions that accelerate business transformation.
                        </p>
                    </div>
                </div>

                {/* Grid of Reasons */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {whyData.map((item) => {
                        const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Sparkles;
                        return (
                            <div
                                key={item.id}
                                className="group relative p-8 rounded-2xl bg-neutral-950/80 border border-white/10 hover:border-purple-500/40 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_35px_-5px_rgba(168,85,247,0.2)] hover:-translate-y-1.5 flex flex-col justify-between"
                            >
                                {/* Top Header of Card */}
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-purple-950/50 border border-purple-800/40 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-500 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <span className="text-sm font-mono text-neutral-500 group-hover:text-purple-400 transition-colors">
                                            {item.number}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-medium text-white mb-3 group-hover:text-purple-300 transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Subtle Accent Indicator at Bottom */}
                                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs uppercase tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors">
                                        Zenorix Standard
                                    </span>
                                    <CheckCircle2 className="w-4 h-4 text-neutral-600 group-hover:text-purple-400 transition-colors" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Callout Banner */}
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-neutral-900/90 via-purple-950/30 to-neutral-900/90 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h4 className="text-xl sm:text-2xl font-normal text-white">
                            Ready to transform your digital vision into reality?
                        </h4>
                        <p className="text-sm text-neutral-400 mt-1 font-light">
                            Let's discuss how Zenorix can power your next milestone.
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-3 px-7 py-3.5 border border-purple-500/50 rounded-full text-white text-sm font-medium bg-purple-900/30 hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 group shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                    >
                        <span>Start a Conversation</span>
                        <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                            <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyZenorix;

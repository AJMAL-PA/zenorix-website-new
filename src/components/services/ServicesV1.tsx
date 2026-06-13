import Union from "/assets/images/Union.svg"
import AnimatedText from "../animated/AnimatedText"
import ServicesV1Data from "../../jsonData/services/ServicesV1Data.json"
import { GlowCard } from "@/components/ui/spotlight-card"
import { Link } from "react-router-dom"

const ServicesV1 = () => {
    return (
        <>
            <div className="service-sec" id="services">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            What We Build
                        </span>
                        <AnimatedText>
                            {`Websites, software & apps — built to perform. At Zenorix, we turn complex ideas into clean, powerful digital products that scale with your business.`}
                        </AnimatedText>
                    </div>
                </div>
                
                {/* Cards Section Heading */}
                <div className="max-w-7xl mx-auto px-6 pt-4 pb-2">
                    <div className="flex items-end justify-between border-b border-white/10 pb-6 mb-2">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-purple-400 mb-2">
                                // Core Offerings
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Solutions Built
                                <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                                    For Every Scale.
                                </span>
                            </h2>
                        </div>
                        <p className="hidden md:block text-sm text-gray-400 max-w-[220px] text-right leading-relaxed">
                            Three pillars. One vision. Infinite possibilities.
                        </p>
                    </div>
                </div>

                {/* 3 Premium Glow Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 py-12 justify-items-center">
                    {ServicesV1Data.slice(0, 3).map((service) => {
                        return (
                            <GlowCard 
                                key={service.id}
                                glowColor="purple"
                                customSize={true}
                                className="w-[360px] h-[520px] p-8 flex flex-col justify-start relative text-left bg-black/40 border border-white/5"
                            >
                                <div className="flex flex-col h-full z-10">
                                    {/* Icon circle with gradient & reflection */}
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-gradient-to-tr from-[#171c2c] to-[#121624] shadow-lg border border-white/10 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-2/3 h-2/3 opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.5),transparent_80%)] blur-[10px]" />
                                        <img src={`/assets/images/${service.icon}`} alt="icon" className="w-5 h-5 object-contain filter invert relative z-10" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-medium text-white mb-3 tracking-tight leading-snug">
                                        {service.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                                        {service.text}
                                    </p>
                                </div>

                                {/* Full-card link overlay */}
                                <Link 
                                    to={`/service-details/${service.id}`} 
                                    className="absolute inset-0 z-50 cursor-pointer"
                                    aria-label={`Learn more about ${service.name}`}
                                />
                            </GlowCard>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ServicesV1;
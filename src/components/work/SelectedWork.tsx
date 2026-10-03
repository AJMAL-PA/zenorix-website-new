import React from "react";
import { Link } from "react-router-dom";
import SelectedWorkData from "../../jsonData/work/SelectedWorkData.json";
import SingleSelectedWork, { SelectedWorkType } from "./SingleSelectedWork";

const SelectedWork = () => {
    return (
        <section className="bg-white text-neutral-900 py-20 md:py-28 px-6 sm:px-12 lg:px-[72px] relative overflow-hidden border-t border-neutral-200 font-degular" id="selected-work">
            {/* Ambient Purple Background Glows */}
            <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-100/40 blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 right-1/4 w-[450px] h-[350px] bg-indigo-100/30 blur-[140px] pointer-events-none rounded-full" />

            <div className="max-w-[1680px] 2xl:max-w-[1880px] mx-auto relative z-10">
                {/* Top Section Header Row */}
                <div className="flex items-center justify-between pb-8 md:pb-10 border-b border-neutral-200 mb-10 md:mb-14">
                    {/* Left: Purple Indicator + Title */}
                    <div className="flex items-center gap-3">
                        <svg 
                            className="w-3.5 h-3.5 fill-[#8A2CE0] shrink-0 transform translate-y-[-1px]" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        <h2 className="text-xs sm:text-sm md:text-[15px] font-medium tracking-[0.25em] text-neutral-900 uppercase" style={{ fontWeight: 500 }}>
                            OUR SELECTED WORK
                        </h2>
                    </div>

                    {/* Right: Badge / Link */}
                    <div>
                        <Link 
                            to="/projects" 
                            className="text-xs sm:text-sm md:text-[15px] font-medium tracking-[0.2em] text-neutral-500 uppercase hover:text-[#8A2CE0] transition-colors flex items-center gap-1.5 group"
                            style={{ fontWeight: 500 }}
                        >
                            <span>1K+ WORKS</span>
                            <span className="inline-block transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                        </Link>
                    </div>
                </div>

                {/* 2-Column Projects Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-14">
                    {(SelectedWorkData as SelectedWorkType[]).map((work) => (
                        <SingleSelectedWork work={work} key={work.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelectedWork;

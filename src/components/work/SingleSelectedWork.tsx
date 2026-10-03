import React from "react";
import { Link } from "react-router-dom";

export interface SelectedWorkType {
    id: number;
    thumb: string;
    projectName: string;
    category: string;
    year: string;
    info?: string;
    link?: string;
}

const SingleSelectedWork = ({ work }: { work: SelectedWorkType }) => {
    const { id, thumb, projectName, category, year, link } = work;

    return (
        <Link 
            to={link || `/project-details/${id}`} 
            className="group block w-full focus:outline-none"
        >
            {/* Image Card Container */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[6px] bg-neutral-100 border border-neutral-200/80 group-hover:border-purple-400/60 transition-all duration-500 shadow-sm hover:shadow-[0_15px_35px_-5px_rgba(168,85,247,0.18)]">
                <img
                    src={`/assets/images/${thumb}`}
                    alt={projectName}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Content Below Card */}
            <div className="mt-4 sm:mt-5 md:mt-6 px-1">
                {/* Year • Category */}
                <div className="text-xs sm:text-sm md:text-[15px] font-sans font-medium text-neutral-500 tracking-wide flex items-center gap-2 mb-1.5 sm:mb-2">
                    <span className="text-neutral-700 font-semibold">{year}</span>
                    <span className="text-neutral-400">•</span>
                    <span>{category}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold tracking-tight text-neutral-900 font-sans group-hover:text-purple-600 transition-colors duration-300">
                    {projectName}
                </h3>
            </div>
        </Link>
    );
};

export default SingleSelectedWork;

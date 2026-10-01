import { Link } from "react-router-dom";

interface ProductType {
    id: number;
    thumb: string;
    projectName: string;
    description: string;
    info: string;
    date: string;
    cardBg?: string;
}

interface SingleFeatureProps {
    feature: ProductType;
    index: number;
}

const SingleFeatureV1 = ({ feature, index }: SingleFeatureProps) => {
    const { id, thumb, projectName, description, info, date, cardBg } = feature;
    const isReversed = index % 2 === 1;

    return (
        <div className="w-full py-4 sm:py-6 lg:py-8">
            <div className="w-full flex flex-col lg:flex-row items-center">
                
                {/* Media Image Showcase Column - Bleeds to the screen edge */}
                <div
                    className={`w-full lg:w-1/2 flex ${
                        isReversed ? "lg:order-2 justify-end" : "lg:order-1 justify-start"
                    }`}
                >
                    <Link
                        to={`/project-details/${id}`}
                        className={`group block w-full relative overflow-hidden transition-all duration-500 hover:opacity-95 ${
                            isReversed
                                ? "lg:rounded-l-3xl rounded-2xl"
                                : "lg:rounded-r-3xl rounded-2xl"
                        }`}
                        style={{ backgroundColor: cardBg || undefined }}
                    >
                        <div className="w-full h-[280px] sm:h-[380px] md:h-[460px] lg:h-[500px] xl:h-[560px] 2xl:h-[600px] flex items-center justify-center overflow-hidden">
                            <img
                                src={`/assets/images/${thumb}`}
                                alt={projectName}
                                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                                    isReversed ? "object-left" : "object-right"
                                }`}
                            />
                        </div>
                    </Link>
                </div>

                {/* Product Information Column */}
                <div
                    className={`w-full lg:w-1/2 flex flex-col justify-center py-8 sm:py-12 px-6 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                    {/* Project Name Label */}
                    <span className="text-sm sm:text-base font-normal text-neutral-500 mb-1 font-outfit">
                        Project Name:
                    </span>

                    {/* Main Title */}
                    <Link to={`/project-details/${id}`}>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-neutral-950 tracking-tight leading-none mb-6 hover:text-[#8B5CF6] transition-colors duration-200 font-outfit">
                            {projectName}
                        </h3>
                    </Link>

                    {/* Description Block */}
                    <div className="mb-6 sm:mb-8">
                        <span className="text-xs font-semibold text-neutral-400 tracking-normal block mb-2 font-outfit">
                            Description
                        </span>
                        <p className="text-xs sm:text-sm md:text-[15px] text-neutral-600 font-normal leading-relaxed max-w-xl font-outfit">
                            {description}
                        </p>
                    </div>

                    {/* 2-Column Info Specs (Industry & Release Date) */}
                    <div className="grid grid-cols-2 gap-8 pt-4 font-outfit border-t border-neutral-100 max-w-lg">
                        <div>
                            <span className="text-xs text-neutral-400 block mb-1">
                                Industry:
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-neutral-900 block">
                                {info}
                            </span>
                        </div>
                        <div>
                            <span className="text-xs text-neutral-400 block mb-1">
                                Release Date:
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-neutral-900 block">
                                {date}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleFeatureV1;

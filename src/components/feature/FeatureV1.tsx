import { Link } from "react-router-dom";
import FeatureV1Data from "../../jsonData/feature/FeatureV1Data.json";
import SingleFeatureV1 from "./SingleFeatureV1";

const FeatureV1 = () => {
    return (
        <section className="featured-products-sec py-16 sm:py-24 bg-white text-neutral-900 relative overflow-hidden w-full" id="projects">
            {/* Section Header (Centered with container padding) */}
            <div className="text-center max-w-3xl mx-auto px-6 sm:px-10 mb-12 sm:mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-950 mb-4 font-outfit">
                    <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#6366F1] mr-2">
                        Featured
                    </span>{" "}
                    Products
                </h2>
                
                <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-2xl mx-auto font-outfit">
                    Explore our collection of cutting-edge products designed to empower your business and elevate your creative potential. <br className="hidden sm:inline" />
                    Each product is meticulously crafted to provide exceptional performance, usability, and results.
                </p>
            </div>

            {/* Alternating Edge-to-Edge Products Showcase List */}
            <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 w-full">
                {FeatureV1Data.map((feature, index) => (
                    <SingleFeatureV1
                        feature={feature}
                        index={index}
                        key={feature.id}
                    />
                ))}
            </div>

            {/* View More Action */}
            <div className="mt-14 sm:mt-20 flex justify-center px-6">
                <Link
                    to="/projects"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 active:scale-95 font-outfit"
                >
                    View More Products
                </Link>
            </div>
        </section>
    );
};

export default FeatureV1;
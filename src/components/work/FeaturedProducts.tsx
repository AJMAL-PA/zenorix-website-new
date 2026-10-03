import React from "react";
import product1Img from "../../assets/images/product-1.png";
import product2Img from "../../assets/images/product-2.png";

interface ProductItem {
    id: string | number;
    name: string;
    description: string;
    industry: string;
    releaseDate: string;
    image: string;
    imageAlt: string;
    imagePosition: "left" | "right";
}

const products: ProductItem[] = [
    {
        id: 1,
        name: "Zenbrix",
        description: "A complete business management platform built to streamline operations, sales, and team productivity.",
        industry: "Business Management SaaS",
        releaseDate: "2026",
        image: product1Img,
        imageAlt: "Zenbrix - Business Management Platform",
        imagePosition: "left",
    },
    {
        id: 2,
        name: "Zenbrix",
        description: "A complete business management platform built to streamline operations, sales, and team productivity.",
        industry: "Business Management SaaS",
        releaseDate: "2026",
        image: product2Img,
        imageAlt: "Zenbrix - Operations & Payroll Dashboard",
        imagePosition: "right",
    },
];

const FeaturedProducts: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-20 lg:pt-24 lg:pb-32 relative overflow-hidden w-full" id="featured-products">
            {/* Header Section (Centered) */}
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-center mb-14 md:mb-20 lg:mb-24">
                {/* Heading */}
                <div className="flex flex-wrap items-baseline justify-center gap-x-4 md:gap-x-7 tracking-[-1px] md:tracking-[-2px] mb-4 md:mb-6">
                    <span 
                        className="font-['Arapey',serif] italic bg-gradient-to-r from-[#9333ea] via-[#7c3aed] to-[#6366f1] bg-clip-text text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-[96px] leading-tight"
                        style={{ fontFamily: "'Arapey', serif" }}
                    >
                        Featured
                    </span>
                    <span 
                        className="font-normal text-[#111111] text-5xl sm:text-7xl md:text-8xl lg:text-[96px] leading-tight"
                        style={{ fontFamily: "'Clash Display Variable', 'Clash Display', sans-serif" }}
                    >
                        Products
                    </span>
                </div>

                {/* Subtitle / Description */}
                <div 
                    className="text-[#111111] text-[13px] sm:text-[14px] md:text-[15px] leading-[20px] sm:leading-[22px] max-w-2xl mx-auto space-y-1 font-normal opacity-90 px-4"
                    style={{ fontFamily: "'Urbanist', 'Degular Demo', sans-serif" }}
                >
                    <p>Explore our collection of cutting-edge products designed to empower your business and elevate your creative potential.</p>
                    <p>Each product is meticulously crafted to provide exceptional performance, usability, and results.</p>
                </div>
            </div>

            {/* Edge-to-Edge Products Showcase List (Exact Figma Proportions) */}
            <div className="flex flex-col gap-12 sm:gap-16 lg:gap-0 w-full">
                {products.map((product) => {
                    const isLeft = product.imagePosition === "left";
                    return (
                        <div 
                            key={product.id}
                            className={`flex flex-col ${
                                isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                            } items-center justify-between w-full relative`}
                        >
                            {/* Edge-to-Edge Image Column (54.7% width as in Figma) */}
                            <div className={`w-full lg:w-[54.7%] ${isLeft ? "pl-0 pr-0" : "pr-0 pl-0"} flex ${isLeft ? "justify-start" : "justify-end"}`}>
                                <div className={`w-full ${isLeft ? "rounded-r-[6px]" : "rounded-l-[6px]"} overflow-hidden group shadow-sm transition-transform duration-500 hover:scale-[1.005]`}>
                                    <img 
                                        src={product.image} 
                                        alt={product.imageAlt}
                                        className="w-full h-auto object-cover block"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Text & Details Column (45.3% width) */}
                            <div className={`w-full lg:w-[45.3%] flex flex-col justify-center px-6 sm:px-12 md:px-16 ${isLeft ? "lg:pl-16 xl:pl-24 2xl:pl-28 lg:pr-8 xl:pr-14" : "lg:pr-16 xl:pr-24 2xl:pr-28 lg:pl-8 xl:pl-14"} py-8 lg:py-12`}>
                                <div style={{ fontFamily: "'Urbanist', sans-serif" }}>
                                    {/* Project Name Label */}
                                    <span className="block text-[#777777] text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-normal leading-tight">
                                        Project Name:
                                    </span>

                                    {/* Main Project Name */}
                                    <h3 className="text-[#111111] text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[102px] font-normal tracking-tight leading-none mt-2 mb-8 md:mb-10">
                                        {product.name}
                                    </h3>

                                    {/* Description Block */}
                                    <div className="mb-8 md:mb-10">
                                        <span className="block text-[#777777] text-base sm:text-lg md:text-[20px] font-normal mb-1.5">
                                            Description
                                        </span>
                                        <p className="text-[#111111] text-base sm:text-lg md:text-[20px] font-normal leading-snug max-w-xl">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Industry & Release Date Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 md:gap-16 pt-2">
                                        {/* Industry */}
                                        <div>
                                            <span className="block text-[#777777] text-base sm:text-lg md:text-[20px] font-normal">
                                                Industry:
                                            </span>
                                            <p className="text-[#111111] text-base sm:text-lg md:text-[20px] font-normal mt-1">
                                                {product.industry}
                                            </p>
                                        </div>

                                        {/* Release Date */}
                                        <div>
                                            <span className="block text-[#777777] text-base sm:text-lg md:text-[20px] font-normal">
                                                Release Date:
                                            </span>
                                            <p className="text-[#111111] text-base sm:text-lg md:text-[20px] font-normal mt-1">
                                                {product.releaseDate}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeaturedProducts;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroV1 = () => {
    const slides = [
        {
            title: <>Designing <span className="text-purple-500">Digital Experiences</span> <br /> That Stand Out</>,
            description: "We combine aesthetics and user-centric flows to create websites and products that captivate your audience."
        },
        {
            title: <>Building <span className="text-purple-500">Innovative Products</span> <br /> That Drive Growth</>,
            description: "From initial wireframes to polished deployment, we build scalable platforms tailored to your business goals."
        },
        {
            title: <>Engineering <span className="text-purple-500">High-Performance</span> <br /> Code That Scales</>,
            description: "Our systems are built on clean architecture, optimized for speed, security, and long-term maintainability."
        }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000); // Cycles every 4 seconds
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div id="hero" className="relative min-h-screen w-full overflow-hidden bg-black flex items-end">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
            >
                <source src="/assets/video/zenorix animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Readability & Transition Overlays */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10" />

            {/* Hero Content Container */}
            <div className="relative z-20 w-full px-6 sm:px-12 lg:px-[72px] h-full flex flex-col justify-end pb-20 sm:pb-28 pt-36">
                <div className="mr-auto w-full max-w-5xl">
                    <div className="min-h-[160px] sm:min-h-[200px] md:min-h-[240px] flex items-center text-left">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                exit={{ opacity: 0, filter: "blur(12px)", y: -20 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col gap-4 text-left"
                            >
                                <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white font-urbanist leading-[1.15]">
                                    {slides[index].title}
                                </h1>
                                <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl leading-relaxed">
                                    {slides[index].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroV1;
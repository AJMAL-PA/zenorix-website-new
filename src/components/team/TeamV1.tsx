import React, { useEffect, useState } from "react";
import TeamV1Data from "../../jsonData/team/TeamV1Data.json";
import SingleTeamV1 from "./SingleTeamV1";

const TeamV1 = () => {
  const [currentIndex, setCurrentIndex] = useState(TeamV1Data.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(TeamV1Data.length);
    } else if (currentIndex >= TeamV1Data.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - TeamV1Data.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Translation offset calculations
  const translateValue = isMobile
    ? `calc(-${currentIndex} * (100% + 24px))`
    : isTablet
    ? `calc(-${currentIndex} * (50% + 12px))`
    : `calc(-${currentIndex} * (33.333% + 8px))`;

  const extendedData = [...TeamV1Data, ...TeamV1Data, ...TeamV1Data];

  return (
    <section className="py-20 md:py-24 bg-white text-black w-full overflow-hidden" id="team">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-14">
          {/* Title Area */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-purple-600 uppercase block font-sans">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4.5xl font-bold font-sans tracking-wide text-neutral-900 leading-tight uppercase">
              Meet the Experts<br />Behind Our Work
            </h2>
          </div>

          {/* Description Area */}
          <div className="md:col-span-5 md:pl-4">
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-sans font-light">
              Our structural engineers, architects, and design specialists collaborate to deliver
              world-class properties built with structural integrity and custom aesthetic appeal.
            </p>
          </div>

          {/* Controls Area */}
          <div className="md:col-span-2 flex justify-end items-center gap-3">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all bg-purple-600 hover:bg-purple-700 text-white hover:scale-105"
              aria-label="Previous team members"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all bg-purple-600 hover:bg-purple-700 text-white hover:scale-105"
              aria-label="Next team members"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-visible">
          <div
            className={`flex flex-row gap-6 ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
            style={{
              transform: `translateX(${translateValue})`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedData.map((member, index) => (
              <SingleTeamV1 member={member} key={`${member.id}-${index}`} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamV1;
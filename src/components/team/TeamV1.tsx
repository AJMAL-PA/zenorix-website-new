import React, { useEffect, useRef, useState } from "react";
import TeamV1Data from "../../jsonData/team/TeamV1Data.json";
import SingleTeamV1 from "./SingleTeamV1";

const TeamV1 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(TeamV1Data.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const GAP = 20; // 20px gap

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setContainerWidth(width);
        if (width < 640) {
          setVisibleCount(1);
        } else if (width < 1024) {
          setVisibleCount(2);
        } else {
          setVisibleCount(4);
        }
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    let observer: ResizeObserver | null = null;
    if (containerRef.current && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => updateSize());
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateSize);
      if (observer) observer.disconnect();
    };
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

  // Precise Card Width and Step Calculation
  const cardWidth =
    containerWidth > 0
      ? (containerWidth - (visibleCount - 1) * GAP) / visibleCount
      : 0;

  const step = cardWidth + GAP;
  const translatePx = step > 0 ? currentIndex * step : 0;

  const extendedData = [...TeamV1Data, ...TeamV1Data, ...TeamV1Data];

  return (
    <section
      className="py-20 md:py-28 px-6 sm:px-12 lg:px-[72px] bg-white text-neutral-900 w-full overflow-hidden border-t border-neutral-200 font-degular"
      id="team"
    >
      <div className="max-w-[1680px] 2xl:max-w-[1880px] mx-auto relative z-10">
        {/* Header Grid with bottom border */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-8 md:pb-10 border-b border-neutral-200 mb-10 md:mb-14">
          {/* Title Area */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <svg
                className="w-3.5 h-3.5 fill-[#8A2CE0] shrink-0 transform translate-y-[-1px]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="text-xs sm:text-sm md:text-[15px] font-medium tracking-[0.25em] text-neutral-900 uppercase" style={{ fontWeight: 500 }}>
                OUR TEAM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight uppercase" style={{ fontWeight: 500 }}>
              Meet the Experts
              <br />
              Behind Our Work
            </h2>
          </div>

          {/* Description Area */}
          <div className="lg:col-span-5">
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-medium" style={{ fontWeight: 500 }}>
              Our passionate innovators and leaders collaborate to deliver
              world-class digital experiences built with excellence, precision,
              and custom aesthetic appeal.
            </p>
          </div>

          {/* Controls Area */}
          <div className="lg:col-span-2 flex justify-end items-center gap-3">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-neutral-900 hover:bg-[#8A2CE0] text-white hover:scale-105 shadow-sm cursor-pointer"
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
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-neutral-900 hover:bg-[#8A2CE0] text-white hover:scale-105 shadow-sm cursor-pointer"
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
        <div ref={containerRef} className="relative w-full overflow-hidden">
          <div
            className={`flex flex-row ${
              isTransitioning ? "transition-transform duration-500 ease-out" : ""
            }`}
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${translatePx}px)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedData.map((member, index) => (
              <SingleTeamV1
                member={member}
                cardWidth={cardWidth}
                key={`${member.id}-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamV1;
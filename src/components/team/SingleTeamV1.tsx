import React, { useState } from "react";

interface DataType {
  id?: number;
  thumb?: string;
  name?: string;
  designation?: string;
  text?: string;
  delay?: number;
}

interface SingleTeamV1Props {
  member: DataType;
  cardWidth?: number;
}

const SingleTeamV1 = ({ member, cardWidth }: SingleTeamV1Props) => {
  const { thumb, name, designation } = member;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 group relative aspect-[3/4] overflow-hidden rounded-[18px] cursor-pointer select-none"
      style={{
        backgroundColor: "#dcdfe3",
        width: cardWidth && cardWidth > 0 ? `${cardWidth}px` : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Member Portrait Card Image */}
      <img
        src={`/assets/images/${thumb}`}
        alt={name}
        className="w-full h-full object-cover object-top grayscale contrast-[1.06] transition-transform duration-500 ease-out"
        style={{
          transform: isHovered ? "scale(1.04)" : "scale(1)",
        }}
        loading="lazy"
      />

      {/* Name and Details ON the card at the bottom (Shown on hover) */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex flex-col text-left transition-all duration-300 ease-out z-10 bg-gradient-to-t from-[#dcdfe3] from-60% via-[#dcdfe3]/95 to-transparent pt-12 pb-5"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0px)" : "translateY(8px)",
          visibility: isHovered ? "visible" : "hidden",
        }}
      >
        <h4 className="text-[17px] md:text-[18px] font-bold text-neutral-950 tracking-tight leading-tight font-sans">
          {name}
        </h4>
        <span className="text-[13px] md:text-[14px] text-neutral-600 font-semibold leading-tight font-sans mt-1">
          {designation}
        </span>
      </div>
    </div>
  );
};

export default SingleTeamV1;
import React from "react";

interface DataType {
  id?: number;
  thumb?: string;
  name?: string;
  designation?: string;
  text?: string;
  delay?: number;
}

const SingleTeamV1 = ({ member }: { member: DataType }) => {
  const { thumb, name, designation } = member;

  return (
    <div className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-neutral-50 rounded-[28px] p-6 lg:p-8 flex flex-row items-center gap-6 lg:gap-8 shadow-sm border border-neutral-100/40 select-none hover:border-purple-500/40 transition-colors group">
      {/* Left Column - Member Portrait */}
      <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[160px] lg:h-[160px] flex-shrink-0 overflow-hidden rounded-[20px] bg-neutral-100">
        <img
          src={`/assets/images/${thumb}`}
          alt={name}
          className="w-full h-full object-cover grayscale contrast-[1.05]"
          loading="lazy"
        />
      </div>

      {/* Right Column - Text Info & Socials */}
      <div className="flex flex-col justify-center flex-grow">
        <h4 className="text-xl lg:text-2xl font-semibold tracking-wider text-neutral-900 mb-1.5 font-sans group-hover:text-purple-700 transition-colors">
          {name}
        </h4>
        <span className="text-sm lg:text-base font-sans text-neutral-500 mb-5 font-light">
          {designation}
        </span>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {/* Facebook */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-5 h-5 flex items-center justify-center text-neutral-800 hover:text-purple-600 transition-colors"
            aria-label={`${name} Facebook`}
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.5.5-1 1-1h3V2h-3c-2.5 0-4 1.5-4 4v2z" />
            </svg>
          </a>

          {/* X */}
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-5 h-5 flex items-center justify-center text-neutral-800 hover:text-purple-600 transition-colors"
            aria-label={`${name} X`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-5 h-5 flex items-center justify-center text-neutral-800 hover:text-purple-600 transition-colors"
            aria-label={`${name} Instagram`}
          >
            <svg
              className="w-4 h-4 stroke-current fill-none"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleTeamV1;
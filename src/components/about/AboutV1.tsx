import { ArrowUpRight } from 'lucide-react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const AboutV1 = () => {
    return (
        <section className="about-sec py-16 sm:py-20 lg:py-28 px-6 sm:px-10 lg:px-16 2xl:px-24 bg-white text-neutral-900 relative overflow-hidden font-outfit w-full" id="about">
            <div className="max-w-[1680px] 2xl:max-w-[1880px] w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    {/* Left Column: Image with Floating White Bezel Zenorix Z Badge */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[420px] lg:max-w-none">
                            {/* Main Workspace Image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] aspect-[3/4] sm:aspect-[4/5] bg-neutral-100">
                                <img
                                    src="/assets/images/about-workspace.jpg"
                                    alt="Modern workspace at Zenorix"
                                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Floating White Frame Card with Purple Zenorix Z Badge */}
                            <div className="absolute -bottom-5 -left-4 sm:-bottom-7 sm:-left-6 w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-3xl p-2.5 sm:p-3 shadow-[0_20px_45px_rgba(0,0,0,0.16)] flex items-center justify-center transition-transform duration-300 hover:scale-105 z-10">
                                <div className="w-full h-full bg-[#8B5CF6] rounded-2xl flex items-center justify-center p-4 sm:p-5">
                                    <img
                                        src="/assets/images/Z (1).png"
                                        alt="Zenorix Z Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content & Stats */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        {/* Subtitle Tag */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex flex-col gap-1 w-3.5">
                                <span className="h-[2px] w-full bg-[#8B5CF6] rounded-full inline-block"></span>
                                <span className="h-[2px] w-2/3 bg-[#8B5CF6] rounded-full inline-block"></span>
                            </div>
                            <span className="text-xs sm:text-[13px] font-medium text-neutral-600 tracking-normal">
                                About Zenorix
                            </span>
                        </div>

                        {/* Main Title */}
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-950 tracking-tight leading-[1.18] mb-5">
                            We build technology that helps businesses grow.
                        </h2>

                        {/* Description Paragraph */}
                        <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed mb-7 max-w-xl">
                            From business websites to e-commerce platforms and custom software, we design and build digital solutions around the way your business works.
                        </p>

                        {/* Two Feature Columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-7">
                            {/* Feature 1: Quality */}
                            <div className="flex flex-col items-start">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center mb-3 shadow-md shadow-purple-500/20">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" />
                                        <path d="M4 7h16a2 2 0 0 1 2 2v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9a2 2 0 0 1 2-2z" />
                                        <circle cx="12" cy="14" r="2" />
                                        <path d="M12 12v4" />
                                    </svg>
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-neutral-950 mb-1.5">
                                    Quality That Drives Results
                                </h3>
                                <p className="text-xs text-neutral-500 leading-relaxed">
                                    We combine thoughtful design with reliable development to create digital products that are built for real business needs.
                                </p>
                            </div>

                            {/* Feature 2: Partnership */}
                            <div className="flex flex-col items-start">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center mb-3 shadow-md shadow-purple-500/20">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                                        <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                                        <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
                                        <path d="M2 12a10 10 0 0 1 18-6" />
                                        <path d="M2 16h.01" />
                                        <path d="M21.8 16c.2-2 .131-5.354 0-6" />
                                        <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
                                        <path d="M8.65 22c.21-.66.45-1.32.57-2" />
                                        <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
                                    </svg>
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-neutral-950 mb-1.5">
                                    Partnership You Can Rely On
                                </h3>
                                <p className="text-xs text-neutral-500 leading-relaxed">
                                    From the first idea to launch and beyond, we work closely with you to build, improve and scale your digital presence.
                                </p>
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="w-full h-px bg-neutral-200/80 mb-6"></div>

                        {/* Bottom Row: Checklist & Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                            {/* Checklist & Button */}
                            <div className="sm:col-span-7 flex flex-col items-start space-y-2">
                                <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                                    <svg className="w-4 h-4 text-[#8B5CF6] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <span>Strategy, design & development</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                                    <svg className="w-4 h-4 text-[#8B5CF6] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <span>Websites & software built around needs</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                                    <svg className="w-4 h-4 text-[#8B5CF6] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <span>Support beyond the initial launch</span>
                                </div>

                                <div className="pt-2">
                                    <Link
                                        to="/about"
                                        className="inline-flex items-center gap-1.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
                                    >
                                        <span>More About Us</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="sm:col-span-5 flex flex-col items-start text-left">
                                <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-neutral-950 tracking-tight flex items-center justify-start gap-1.5 text-left">
                                    <span>
                                        <CountUp end={4} enableScrollSpy scrollSpyOnce />+
                                    </span>
                                    <span className="text-neutral-950 font-normal">|</span>
                                    <span>
                                        <CountUp end={50} enableScrollSpy scrollSpyOnce />+
                                    </span>
                                    <span className="text-neutral-950 font-normal">|</span>
                                    <span>
                                        <CountUp end={30} enableScrollSpy scrollSpyOnce />+
                                    </span>
                                </div>
                                <div className="text-xs sm:text-[13px] font-bold text-neutral-900 tracking-tight mt-1.5 text-left">
                                    Years | Projects | Clients
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutV1;
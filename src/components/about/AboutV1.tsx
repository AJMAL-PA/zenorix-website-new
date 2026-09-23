import { Clock, FolderCheck, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const AboutV1 = () => {
    return (
        <section className="about-sec py-20 md:py-28 px-6 sm:px-12 lg:px-[72px] bg-white text-neutral-900 relative overflow-hidden" id="about">
            <div className="max-w-[1640px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                    {/* Left Column: Info & CTA */}
                    <div className="lg:col-span-5 flex flex-col items-start">
                        {/* Subtitle Badge */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[3px] bg-[#8B5CF6] rounded-full inline-block"></span>
                            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                                About Company
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.18] mb-6">
                            Digital Solutions <br className="hidden sm:inline" />
                            for a <span className="text-[#8B5CF6] ml-1">Better Tomorrow</span>
                        </h2>

                        {/* Description Text */}
                        <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mb-8 max-w-xl">
                            Zenorix is a premier digital agency building high-performance web applications, scalable software, and stunning user experiences that accelerate business growth through continuous innovation.
                        </p>

                        {/* CTA Button */}
                        <Link 
                            to="/about"
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Right Column: 3 Stat Cards */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
                        {/* Card 1: Years */}
                        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 flex flex-col items-center justify-center text-center group">
                            {/* Circle Icon Indicator */}
                            <div className="w-14 h-14 rounded-full bg-[#F3EEFF] text-[#8B5CF6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Clock className="w-6 h-6" />
                            </div>

                            {/* Number */}
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 font-urbanist tracking-tight">
                                <CountUp end={4} enableScrollSpy scrollSpyOnce />
                                <span>+</span>
                            </div>

                            {/* Label */}
                            <p className="mt-2 text-xs sm:text-sm text-neutral-500 uppercase tracking-[0.2em] font-semibold">
                                YEARS
                            </p>

                            {/* Purple Accent Underline */}
                            <div className="w-12 h-[3px] bg-[#8B5CF6] rounded-full mt-3"></div>
                        </div>

                        {/* Card 2: Projects */}
                        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 flex flex-col items-center justify-center text-center group">
                            {/* Circle Icon Indicator */}
                            <div className="w-14 h-14 rounded-full bg-[#F3EEFF] text-[#8B5CF6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FolderCheck className="w-6 h-6" />
                            </div>

                            {/* Number */}
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 font-urbanist tracking-tight">
                                <CountUp end={50} enableScrollSpy scrollSpyOnce />
                                <span>+</span>
                            </div>

                            {/* Label */}
                            <p className="mt-2 text-xs sm:text-sm text-neutral-500 uppercase tracking-[0.2em] font-semibold">
                                PROJECTS
                            </p>

                            {/* Purple Accent Underline */}
                            <div className="w-12 h-[3px] bg-[#8B5CF6] rounded-full mt-3"></div>
                        </div>

                        {/* Card 3: Clients */}
                        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 flex flex-col items-center justify-center text-center group">
                            {/* Circle Icon Indicator */}
                            <div className="w-14 h-14 rounded-full bg-[#F3EEFF] text-[#8B5CF6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-6 h-6" />
                            </div>

                            {/* Number */}
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 font-urbanist tracking-tight">
                                <CountUp end={30} enableScrollSpy scrollSpyOnce />
                                <span>+</span>
                            </div>

                            {/* Label */}
                            <p className="mt-2 text-xs sm:text-sm text-neutral-500 uppercase tracking-[0.2em] font-semibold">
                                CLIENTS
                            </p>

                            {/* Purple Accent Underline */}
                            <div className="w-12 h-[3px] bg-[#8B5CF6] rounded-full mt-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutV1;
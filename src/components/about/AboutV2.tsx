import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const AboutV2 = () => {
    return (
        <section className="about-sec py-20 md:py-28 px-6 sm:px-12 lg:px-[72px] bg-black text-white relative overflow-hidden" id="about">
            <div className="max-w-[1440px] mx-auto">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
                    {/* Left Column */}
                    <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
                        <div className="flex items-center gap-3">
                            {/* Triangle Bullet */}
                            <svg className="w-3.5 h-3.5 text-purple-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold">
                                About Company
                            </span>
                        </div>
                        
                        {/* Blueprint Outline Geometric Shape */}
                        <div className="opacity-25 hover:opacity-40 transition-opacity duration-500 w-fit">
                            <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <rect x="5" y="5" width="90" height="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
                                <path d="M5 5 L95 95 M95 5 L5 95" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                                
                                {/* Logo stylized Z paths */}
                                <path d="M 25 10 L 90 22 L 25 87" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M 75 90 L 10 78 L 75 13" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                
                                {/* Drafting guide points */}
                                <circle cx="25" cy="10" r="1.5" stroke="currentColor" strokeWidth="0.5" fill="none" />
                                <circle cx="90" cy="22" r="1.5" stroke="currentColor" strokeWidth="0.5" fill="none" />
                                <circle cx="25" cy="87" r="1.5" stroke="currentColor" strokeWidth="0.5" fill="none" />
                                <circle cx="75" cy="90" r="1.5" stroke="currentColor" strokeWidth="0.5" fill="none" />
                                <circle cx="10" cy="78" r="1.5" stroke="currentColor" strokeWidth="0.5" fill="none" />
                                <circle cx="75" cy="13" r="1.5" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-7 flex flex-col gap-6 md:gap-8 justify-between h-full">
                        <div className="flex flex-col gap-6">
                            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-300 font-light leading-relaxed max-w-2xl">
                                Zenorix is a premier digital design and development agency. We build high-performance web applications, scalable software solutions, and stunning user experiences for startups and enterprises, integrating cutting-edge technology and design where they create real value.
                            </p>
                            <p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl">
                                We are committed to pushing the boundaries of what’s possible, working together seamlessly to exceed expectations and deliver outstanding value to our clients. Our mission is to accelerate your business growth through innovation.
                            </p>
                        </div>
                        
                        <div>
                            <Link 
                                to="/contact" 
                                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300 group w-fit"
                            >
                                Contact us
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-base">
                                    ↗
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Spacing */}
                <div className="h-20 md:h-28"></div>

                {/* Bottom Section - Statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 border-t border-white/10 pt-16">
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-baseline text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white font-urbanist">
                            <CountUp end={4} enableScrollSpy scrollSpyOnce />
                            <span className="text-purple-500 ml-1">+</span>
                        </div>
                        <p className="mt-3 text-xs sm:text-sm text-neutral-400 uppercase tracking-[0.15em] font-medium">
                            Years of Experience
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-baseline text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white font-urbanist">
                            <CountUp end={30} enableScrollSpy scrollSpyOnce />
                            <span className="text-purple-500 ml-1">+</span>
                        </div>
                        <p className="mt-3 text-xs sm:text-sm text-neutral-400 uppercase tracking-[0.15em] font-medium">
                            Websites Delivered
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-baseline text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white font-urbanist">
                            <CountUp end={50} enableScrollSpy scrollSpyOnce />
                            <span className="text-purple-500 ml-1">+</span>
                        </div>
                        <p className="mt-3 text-xs sm:text-sm text-neutral-400 uppercase tracking-[0.15em] font-medium">
                            Happy Clients
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutV2;
import { Link } from "react-router-dom";
import NavHeader from "@/components/ui/nav-header";
import { NeonButton } from "@/components/ui/neon-button";
import { ArrowRight } from "lucide-react";

const HeaderMenu = () => {
    return (
        <>
            <header className="header-menu-wrap" style={{
                background: 'transparent',
                padding: '0',
            }}>
                <div className="custom-container">
                    <div
                        className="custom-row"
                        style={{
                            alignItems: 'center',
                            position: 'relative',
                            display: 'flex',
                            minHeight: '110px',
                        }}
                    >
                        {/* Logo — left-anchored, vertically centered */}
                        <Link
                            to="/"
                            className="logo group"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                zIndex: 1,
                                flexShrink: 0,
                                textDecoration: 'none',
                            }}
                        >
                            <img
                                src="/assets/images/zenorix3d.png"
                                alt="Zenorix Logo"
                                className="opacity-30 group-hover:opacity-100 hover:opacity-100 transition-all duration-300 cursor-pointer"
                                style={{
                                    height: '70px',
                                    width: 'auto',
                                    maxWidth: 'none',
                                    display: 'block',
                                    objectFit: 'contain',
                                }}
                            />
                        </Link>

                        {/* Animated sliding nav — absolutely centered in header */}
                        <nav
                            className="navbar"
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)', // ← removed the +20px offset
                                zIndex: 0,
                            }}
                        >
                            <NavHeader />
                        </nav>

                        {/* Contact Us — right-anchored button */}
                        <div
                            style={{
                                marginLeft: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                zIndex: 1,
                            }}
                        >
                            <Link to="/contact" className="header-contact-btn">
                                <NeonButton
                                    variant="outline"
                                    size="default"
                                    neon
                                    className="text-xs sm:text-sm font-semibold border-purple-800 hover:border-purple-600 shadow-[0_0_12px_1px_rgba(147,51,234,0.15)] hover:shadow-[0_0_22px_3px_rgba(147,51,234,0.35)] hover:brightness-110 hover:bg-gradient-to-br hover:from-[#4c1d95] hover:via-[#2e0854] hover:to-[#1c0036] transition-all duration-300 flex items-center justify-between gap-3 pl-6 pr-1.5 py-1.5"
                                >
                                    <span>Get in Touch</span>
                                    <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105 shadow-[0_0_12px_rgba(255,255,255,0.6)]">
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </NeonButton>
                            </Link>
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderMenu;
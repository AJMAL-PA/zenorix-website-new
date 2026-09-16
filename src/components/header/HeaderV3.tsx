import sidebarbg from "/assets/images/sidebarbg.png";
import SocialShareV1 from "../social/SocialShareV1";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useNotchScrollLink from "../../hooks/useNotchScrollLink";

const HeaderV3 = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isHamburgActive, setIsHamburgActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsHamburgActive(window.scrollY >= 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleHamburgClick = () => {
        setIsSidebarActive(true);
        document.body.style.overflow = "hidden";
    };

    const handleCloseClick = () => {
        setIsSidebarActive(false);
        document.body.style.overflow = "auto";
    };

    useNotchScrollLink(".notch-bar-menu-wrap", "a[href^='#']");

    return (
        <>
            {/* hamburg-menu */}
            <div className="scroll-to-show-menu">
                <span className={`hamburg-menu ${isHamburgActive ? "active" : ""}`} onClick={handleHamburgClick}>
                    <span />
                    <span />
                    <span />
                </span>
            </div>

            {/* Sidebar */}
            <div className={`header-sidebar-wrap ${isSidebarActive ? "active" : ""}`}>
                <div className="header-sidebar-content">
                    <span className="close-header-sidebar" onClick={handleCloseClick}>
                        <i className="las la-times" />
                    </span>

                    <img src={sidebarbg} alt="sidebar" className="sidebar-shape" />
                    <div className="header-sidebar-top">
                        <ul>
                            <li>
                                <span>Based in Kerala,</span>
                                <a href="mailto:zenorix.group@gmail.com">zenorix.group@gmail.com</a>
                            </li>
                            <li>
                                <span>India</span>
                                <a href="tel:+919774115681">+91 9774115681</a>
                            </li>
                        </ul>
                    </div>

                    <nav className="sidebar-menu">
                        <ul className="menu" id="sidebar-menu-id">
                            <li>
                                <a href="#about" onClick={handleCloseClick}>About Us</a>
                            </li>
                            <li>
                                <a href="#why-zenorix" onClick={handleCloseClick}>Why Zenorix</a>
                            </li>
                            <li>
                                <a href="#services" onClick={handleCloseClick}>Services</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={handleCloseClick}>Projects</a>
                            </li>
                            <li>
                                <a href="#team" onClick={handleCloseClick}>Team</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={handleCloseClick}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-sidebar-bottom">
                        <ul>
                            <SocialShareV1 />
                        </ul>
                    </div>
                </div>
            </div>

            {/* header-menu-wrap */}
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">
                        <Link to="/" className="logo">
                            <img
                                src="/assets/images/logoinblack-Photoroom%20(1).png"
                                alt="Zenorix Logo"
                                style={{ height: "60px", width: "auto", objectFit: "contain" }}
                            />
                        </Link>

                        <nav className="navbar">
                            <ul className="menu">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/#projects">Services</Link>
                                </li>
                                <li>
                                    <Link to="/projects">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/faq">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="header-right-info">
                            <a className="with-border" href="tel:+919774115681">+91 9774115681</a>
                            <a href="mailto:zenorix.group@gmail.com">
                                <i className="iconoir-mail-out" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderV3;
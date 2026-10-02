import { Link } from "react-router-dom";

const HeaderV2 = () => {
    return (
        <>
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">
                        <Link to="/" className="logo group">
                            <img
                                src="/assets/images/zenorix3d.png"
                                alt="Zenorix Logo"
                                className="opacity-30 group-hover:opacity-100 hover:opacity-100 transition-all duration-300 cursor-pointer"
                                style={{ height: "60px", width: "auto", objectFit: "contain" }}
                            />
                        </Link>

                        {/* Navigation menu */}
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

                        {/* Header right info */}
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

export default HeaderV2;
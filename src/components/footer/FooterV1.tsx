import btnArrow from "/assets/images/btn-arrow.svg"
import { Link } from "react-router-dom";

const FooterV1 = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-top">
                    <div className="row">

                        {/* Company Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>COMPANY</h4>
                                    <ul>
                                        <li>
                                            <Link className="with-border" to="/about">
                                                <img src={btnArrow} alt="icon" /> About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" to="/#why-zenorix">
                                                <img src={btnArrow} alt="icon" /> Why Zenorix
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" to="/#projects">
                                                <img src={btnArrow} alt="icon" /> Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" to="/projects">
                                                <img src={btnArrow} alt="icon" /> Projects
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" to="/faq">
                                                <img src={btnArrow} alt="icon" /> FAQs
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    &copy; {(new Date().getFullYear())} ZENORIX. ALL RIGHTS RESERVED
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-contact-infos">
                                    <div className="footer-widget-top">
                                        <h4>REACH OUT TO US</h4>
                                        <div className="links">
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} href="tel:+919774115681" className="with-border">+91 9774115681</a>
                                            </div>
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} href="mailto:zenorix.group@gmail.com" className="with-border">zenorix.group@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="theme-btn">
                                        {`Let's Connect`}
                                        <img src={btnArrow} alt="icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Social Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>Social</h4>
                                    <ul>
                                        <li>
                                            <a className="with-border" href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                                <img src={btnArrow} alt="icon" /> Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                                                <img src={btnArrow} alt="icon" /> LinkedIn
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                                <img src={btnArrow} alt="icon" /> GitHub
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    BASED IN KERALA, INDIA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
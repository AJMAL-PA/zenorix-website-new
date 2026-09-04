import btnArrow from '/assets/images/btn-arrow.svg';
import zenorixLogo from '/assets/images/logothemetransparent.png';
import { Link } from "react-router-dom";

const ErrorHero = () => {
    return (
        <>
            <div className="hero-sec error-hero-sec">
                <div className="custom-container">
                    <div className="hero-inner">
                        <img className="hero-shape logo-3d-rotate" src={zenorixLogo} alt="Zenorix Logo" style={{ maxWidth: '300px', opacity: 0.8 }} />
                        <div className="hero-bottom error-box">
                            <div className="left">
                                <h2><span>Oops!</span> Page Not<br />Found (404)</h2>
                            </div>
                            <p><span className="required">*</span>{`We couldn't find the page you're looking for. This could be because the page has been moved or`}<br />deleted, you might have mistyped the URL, or the link you followed could be outdated.
                            </p>
                            <Link to="/contact" className="theme-btn">
                                Back To Home
                                <img src={btnArrow} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorHero;
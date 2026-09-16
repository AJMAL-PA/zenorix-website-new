import btnArrow from '/assets/images/btn-arrow.svg';
import zenorixLogo from '/assets/images/logothemetransparent.png';
import { Link } from "react-router-dom";

interface DataType {
    title?: string;
}

const HeroV2 = ({ title }: DataType) => {
    return (
        <>
            <div className="hero-sec about-hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">
                        <img className="hero-shape logo-3d-rotate" src={zenorixLogo} alt="Zenorix Logo" style={{ maxWidth: '300px', opacity: 0.8 }} />
                        <div className="hero-top">
                            <div className="hero-top-desc">
                                <p>{`"At Zenorix, we hold that creativity sparks innovation. As a full-spectrum digital firm, we excel in converting ambitious ideas into high-impact digital experiences."`}</p>
                            </div>
                            <div className="author-info">
                                <h4>Zenorix Team</h4>
                                <span>Leadership & Innovation</span>
                            </div>
                        </div>
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>{title ? title : "Zenorix"}</h2>
                                <h2>ZENORIX</h2>
                            </div>
                            <Link to="/contact" className="theme-btn">
                                {`Let's Connect`}
                                <img src={btnArrow} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV2;
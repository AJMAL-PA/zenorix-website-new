import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumb?: string;
    title?: string;
    date?: string;
    delay?: string;
}

const SingleFeatureV3 = ({ feature }: { feature: DataType }) => {
    const { id, thumb, title, date, delay } = feature

    return (
        <>
            <div className="feature-project-single">
                <div className="feature-project" data-aos="fade-up" data-aos-delay={delay}>
                    <div className="img-box">
                        <img src={`/assets/images/${thumb}`} alt="image" />
                    </div>
                    <div className="feature-project-infos">
                        <div className="feature-project-info-box">
                            <span className="title">Title:</span>
                            <Link to={`/blog-details/${id}`}>
                                <span className="subtitle">{title}</span>
                            </Link>
                        </div>
                        <div className="feature-project-info-box">
                            <span className="title">Date:</span>
                            <span className="subtitle">{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV3;
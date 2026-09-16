import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumb?: string;
    name?: string;
    projectName?: string;
    textFirst?: string;
    textLast?: string;
    subTitle1?: string;
    subTitle2?: string;
    info?: string;
    date?: string;
    delay?: string;
}

const SingleFeatureV2 = ({ feature }: { feature: DataType }) => {
    const { id, thumb, name, projectName, textFirst, textLast, subTitle1, subTitle2, info, date, delay } = feature;
    const title = projectName || name;
    const firstLine = subTitle1 || textFirst;
    const secondLine = subTitle2 || textLast;

    return (
        <>
            <div className="feature-project-single">
                <div className="feature-project" data-aos="fade-up" data-aos-delay={delay}>
                    <div className="img-box">
                        <img src={`/assets/images/${thumb}`} alt={title || "image"} />
                    </div>
                    <div className="feature-project-infos">
                        <div className="feature-project-info-box">
                            <span className="title">Project Name:</span>
                            <Link to={`/project-details/${id}`}>
                                <span className="subtitle">{title}</span>
                            </Link>
                        </div>
                        <div className={`feature-project-info-box ${!firstLine && !secondLine ? 'd-none' : ''}`}>
                            <span className="title">Description</span>
                            <span className="subtitle">{firstLine}<br />{secondLine}</span>
                        </div>
                        <div className="feature-project-info-box">
                            <span className="title">Industry:</span>
                            <span className="subtitle">{info}</span>
                        </div>
                        <div className={`feature-project-info-box ${!date ? 'd-none' : ''}`}>
                            <span className="title">Release Date:</span>
                            <span className="subtitle">{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV2;
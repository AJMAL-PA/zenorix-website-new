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
    cardBg?: string;
    borderColor?: string;
    titleColor?: string;
    labelColor?: string;
}

const SingleFeatureV2 = ({ feature }: { feature: DataType }) => {
    const { 
        id, 
        thumb, 
        name, 
        projectName, 
        textFirst, 
        textLast, 
        subTitle1, 
        subTitle2, 
        info, 
        date, 
        delay,
        cardBg,
        borderColor,
        titleColor,
        labelColor
    } = feature;
    const title = projectName || name;
    const firstLine = subTitle1 || textFirst;
    const secondLine = subTitle2 || textLast;

    return (
        <div className="feature-project-single">
            <div 
                className="feature-project transition-all duration-500 shadow-sm" 
                data-aos="fade-up" 
                data-aos-delay={delay}
                style={{
                    background: cardBg || undefined,
                    borderColor: borderColor || undefined,
                }}
            >
                <div className="img-box">
                    <img src={`/assets/images/${thumb}`} alt={title || "image"} />
                </div>
                <div className="feature-project-infos">
                    <div className="feature-project-info-box">
                        <span className="title" style={{ color: labelColor || undefined }}>Project Name:</span>
                        <Link to={`/project-details/${id}`}>
                            <span className="subtitle font-semibold" style={{ color: titleColor || undefined }}>{title}</span>
                        </Link>
                    </div>
                    <div className={`feature-project-info-box ${!firstLine && !secondLine ? 'd-none' : ''}`}>
                        <span className="title" style={{ color: labelColor || undefined }}>Description</span>
                        <span className="subtitle font-medium" style={{ color: titleColor || undefined }}>{firstLine}<br />{secondLine}</span>
                    </div>
                    <div className="feature-project-info-box">
                        <span className="title" style={{ color: labelColor || undefined }}>Industry:</span>
                        <span className="subtitle font-medium" style={{ color: titleColor || undefined }}>{info}</span>
                    </div>
                    <div className={`feature-project-info-box ${!date ? 'd-none' : ''}`}>
                        <span className="title" style={{ color: labelColor || undefined }}>Release Date:</span>
                        <span className="subtitle font-medium" style={{ color: titleColor || undefined }}>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFeatureV2;
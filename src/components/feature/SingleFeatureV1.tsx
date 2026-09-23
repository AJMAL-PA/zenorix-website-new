import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumb?: string;
    projectName?: string;
    subTitle1?: string;
    subTitle2?: string;
    info?: string;
    date?: string;
    cardBg?: string;
    borderColor?: string;
    titleColor?: string;
    labelColor?: string;
}

const SingleFeatureV1 = ({ feature }: { feature: DataType }) => {
    const { 
        id, 
        thumb, 
        projectName, 
        subTitle1, 
        subTitle2, 
        info, 
        date, 
        cardBg, 
        borderColor, 
        titleColor, 
        labelColor 
    } = feature;

    return (
        <div 
            className="feature-project transition-all duration-500 shadow-sm"
            style={{
                background: cardBg || undefined,
                borderColor: borderColor || undefined,
            }}
        >
            <div className="img-box">
                <img src={`/assets/images/${thumb}`} alt={projectName || "Project cover"} />
            </div>
            <div className="feature-project-infos">
                <div className="feature-project-info-box">
                    <span className="title" style={{ color: labelColor || undefined }}>Project Name:</span>
                    <Link to={`/project-details/${id}`}>
                        <span className="subtitle font-semibold" style={{ color: titleColor || undefined }}>{projectName}</span>
                    </Link>
                </div>
                <div className="feature-project-info-box">
                    <span className="title" style={{ color: labelColor || undefined }}>Description</span>
                    <span className="subtitle font-medium" style={{ color: titleColor || undefined }}>
                        {subTitle1}<br />{subTitle2}
                    </span>
                </div>
                <div className="feature-project-info-box">
                    <span className="title" style={{ color: labelColor || undefined }}>Industry:</span>
                    <span className="subtitle font-medium" style={{ color: titleColor || undefined }}>{info}</span>
                </div>
                <div className="feature-project-info-box">
                    <span className="title" style={{ color: labelColor || undefined }}>Release Date:</span>
                    <span className="subtitle font-medium" style={{ color: titleColor || undefined }}>{date}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleFeatureV1;


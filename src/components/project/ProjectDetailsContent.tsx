import Union from '/assets/images/Union.svg';
import AnimatedText from '../animated/AnimatedText';

interface Datatype {
    id?: number;
    thumb?: string;
    projectName?: string;
    name?: string;
    category?: string;
    info?: string;
    date?: string;
    subTitle1?: string;
    subTitle2?: string;
    tagline?: string;
    overview?: string;
    research?: string;
    design?: string;
    development?: string;
    developmentSummary?: string;
}

const ProjectDetailsContent = ({ projectData }: { projectData: Datatype }) => {
    const {
        thumb,
        projectName,
        name,
        info,
        category,
        date,
        subTitle1,
        subTitle2,
        tagline,
        overview,
        research,
        design,
        development,
        developmentSummary,
    } = projectData;

    const displayTitle = projectName || name || 'Featured Project';
    const displayInfo = info || category || 'Digital Experience';
    const displayDate = date || '2026';
    const displayDescription = subTitle1
        ? `${subTitle1} ${subTitle2 || ''}`
        : 'A breakthrough digital project delivering high performance, intuitive design, and scalable technology.';
    const displayTagline = tagline || displayTitle;
    const displayOverview =
        overview ||
        'Engineered with creative excellence, custom design precision, and cutting-edge technology to create transformative digital experiences.';
    const displayResearch =
        research ||
        'Research provides data to support strategic design and architectural decisions, uncovering key user workflows and market opportunities to ensure an intuitive, high-converting product.';
    const displayDesign =
        design ||
        'Usability and Accessibility: Effective design caters to user needs with clear visual hierarchy, frictionless interactions, and modern aesthetic elegance that elevates brand value.';
    const displayDevSummary =
        developmentSummary ||
        'Development: Optimizing code, state management, and real-time responsiveness to deliver ultra-fast, rock-solid performance.';
    const displayDevelopment =
        development ||
        'Optimizing the platform involves refining code architecture, reducing asset payloads, and improving response times to enhance overall performance and ensure long-term scalability.';

    return (
        <>
            <div className="project-single-wrap">
                <div className="project-single-header">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            {displayTagline}
                        </span>
                        <AnimatedText>
                            {displayOverview}
                        </AnimatedText>
                    </div>
                </div>
                <div className="feature-project">
                    <div className="img-box">
                        <img className="scaleDown" src={`/assets/images/${thumb}`} alt={displayTitle} />
                    </div>
                    <div className="feature-project-infos">
                        <div className="feature-project-info-box project-name">
                            <span className="title">Project Name:</span>
                            <span className="subtitle">{displayTitle}</span>
                        </div>
                        <div className="feature-project-info-box project-description">
                            <span className="title">Description:</span>
                            <span className="subtitle">
                                {subTitle1 ? (
                                    <>
                                        {subTitle1}
                                        {subTitle2 && <><br />{subTitle2}</>}
                                    </>
                                ) : (
                                    displayDescription
                                )}
                            </span>
                        </div>
                        <div className="feature-project-info-box">
                            <span className="title">Industry:</span>
                            <span className="subtitle">{displayInfo}</span>
                        </div>
                        <div className="feature-project-info-box">
                            <span className="title">Release Date:</span>
                            <span className="subtitle">{displayDate}</span>
                        </div>
                    </div>
                </div>
                <div className="project-single-content-wrap">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            RESEARCH & STRATEGY
                        </span>
                        <div className="right">
                            <AnimatedText>
                                {displayResearch}
                            </AnimatedText>
                        </div>
                    </div>
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            UI/UX & DESIGN
                        </span>
                        <div className="right">
                            <AnimatedText>
                                {displayDesign}
                            </AnimatedText>
                        </div>
                    </div>
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            ENGINEERING & DEVELOPMENT
                        </span>
                        <div className="right">
                            <h3 className="section-title reveal-type">
                                {displayDevSummary}
                            </h3>
                            <div className="section-desc">
                                <div className="section-desc">
                                    <p>{displayDevelopment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="full-image">
                    <img className="scaleDown" src={`/assets/images/${thumb}`} alt={displayTitle} />
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;
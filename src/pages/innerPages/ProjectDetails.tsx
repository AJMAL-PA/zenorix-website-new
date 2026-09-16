import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectDetailsContent from "../../components/project/ProjectDetailsContent";
import FeatureV2Data from '../../jsonData/feature/FeatureV2Data.json';
import LayoutV3 from "../../components/layouts/LayoutV3";

const ProjectDetailsPage = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const data = FeatureV2Data.find(project => project.id === parseInt(id || '0')) || FeatureV2Data[0];

    return (
        <>
            <div className="aixor-main single-project">
                <LayoutV3>
                    {data && <ProjectDetailsContent projectData={data} />}
                </LayoutV3>
            </div>
        </>
    );
};

export default ProjectDetailsPage;
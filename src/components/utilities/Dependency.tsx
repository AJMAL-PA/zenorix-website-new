import { useEffect } from "react";
import AOS from "aos";

const Dependency = () => {
    useEffect(() => {
        // Initialize AOS with configuration
        AOS.init({
            easing: "ease-out-back",
            duration: 1000,
            once: true,
            disable: () => window.innerWidth < 768
        });

        // Cleanup to refresh AOS on component unmount
        return () => AOS.refresh();
    }, []);

    return null;
};

export default Dependency;
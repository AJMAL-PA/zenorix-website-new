import FooterV1 from "../footer/FooterV1";
import HeaderV1 from "../header/HeaderV1";

interface DataType {
    children?: React.ReactNode;
    hideHeader?: boolean;
}

const LayoutV1 = ({ children, hideHeader }: DataType) => {
    return (
        <>
            {!hideHeader && <HeaderV1 />}
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV1;
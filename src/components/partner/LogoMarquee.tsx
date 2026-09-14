import Marquee from "react-fast-marquee";
import PartnerData from "../../jsonData/partner/PartnerData.json";

const LogoMarquee = () => {
    return (
        <div className="our-partner-sec !border-y !border-neutral-200 !py-[40px] bg-[#f9fafb] lg:!border-none lg:!py-0">
            <Marquee speed={40} gradient={true} gradientColor="#f9fafb" gradientWidth={100} pauseOnHover={true}>
                <div style={{ display: 'flex', gap: '100px', alignItems: 'center', paddingRight: '100px' }}>
                    {PartnerData.map((data, index) => (
                        <div key={`${data.id}-${index}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img 
                                src={`/assets/images/${data.thumb}`} 
                                alt="partner logo" 
                                style={{ 
                                    height: '35px', 
                                    width: 'auto', 
                                    objectFit: 'contain',
                                    filter: 'brightness(0) opacity(0.5)',
                                    transition: 'filter 0.3s, opacity 0.3s, transform 0.3s'
                                }} 
                                onMouseOver={(e) => {
                                    e.currentTarget.style.filter = 'invert(26%) sepia(89%) saturate(2300%) hue-rotate(265deg) brightness(95%) opacity(1)';
                                    e.currentTarget.style.transform = 'scale(1.06)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.filter = 'brightness(0) opacity(0.5)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            />
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default LogoMarquee;

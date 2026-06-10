import Marquee from "react-fast-marquee";
import PartnerData from "../../jsonData/partner/PartnerData.json";

const LogoMarquee = () => {
    return (
        <div className="our-partner-sec" style={{ 
            borderTop: '1px solid #333', 
            borderBottom: '1px solid #333',
            padding: '40px 0',
            background: '#0a0a0a'
        }}>
            <Marquee speed={40} gradient={true} gradientColor="#000" gradientWidth={100} pauseOnHover={true}>
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
                                    filter: 'brightness(0) invert(1)',
                                    opacity: 0.7,
                                    transition: 'opacity 0.3s'
                                }} 
                                onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                                onMouseOut={(e) => (e.currentTarget.style.opacity = '0.7')}
                            />
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default LogoMarquee;

import Marquee from "react-fast-marquee";
import PartnerData from "../../jsonData/partner/PartnerData.json";

const LogoMarquee = () => {
    return (
        <div className="our-partner-sec" style={{ 
            borderTop: '1px solid #e5e7eb', 
            borderBottom: '1px solid #e5e7eb',
            padding: '40px 0',
            background: '#f9fafb'
        }}>
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
                                    filter: 'grayscale(100%) opacity(0.6)',
                                    transition: 'filter 0.3s, opacity 0.3s'
                                }} 
                                onMouseOver={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(100%) opacity(0.6)';
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

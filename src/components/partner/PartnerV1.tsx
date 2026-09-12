import PartnerData from "../../jsonData/partner/PartnerData.json";

const PartnerV1 = () => {
    return (
        <div className="our-partner-sec">
            <ul>
                {PartnerData.map(data =>
                    <li key={data.id}>
                        <img 
                            src={`/assets/images/${data.thumb}`} 
                            alt="client" 
                            style={{ 
                                filter: 'brightness(0) opacity(0.5)', 
                                transition: 'filter 0.3s, opacity 0.3s' 
                            }} 
                            onMouseOver={(e) => {
                                e.currentTarget.style.filter = 'invert(26%) sepia(89%) saturate(2300%) hue-rotate(265deg) brightness(95%) opacity(1)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.filter = 'brightness(0) opacity(0.5)';
                            }}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default PartnerV1;
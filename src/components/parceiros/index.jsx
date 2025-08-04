import './index.css';

export default function Parcerios(){
    const partners = [
        {
            id: 1,
            name: "Conta IT",
            logo: "/assets/parc_conta_it.png",
            description: "Soluções de TI"
        },
        {
            id: 2,
            name: "Tarcas",
            logo: "/assets/tarcas.png",
            description: "Consultoria Empresarial"
        },
        {
            id: 3,
            name: "KeyPay",
            logo: "/assets/keypay.png",
            description: "Pagamentos Digitais"
        },
        {
            id: 4,
            name: "InterExpress",
            logo: "/assets/interexpress.png",
            description: "Logística e Transporte"
        },
        {
            id: 5,
            name: "Voice Angola",
            logo: "/assets/voice_angola.png",
            description: "Comunicação Digital"
        }
    ];

    return (
        <section className='partners-section' id='parceiros'>
            <div className="container">
                <div className="section-header">
                    <h2 className='section-title'>Confiado por</h2>
                    <p className='section-subtitle'>Empresas que confiam em nossas soluções digitais</p>
                </div>
                
                <div className='partners-grid'>
                    {partners.map((partner) => (
                        <div key={partner.id} className='partner-card'>
                            <div className="partner-logo">
                                <img src={partner.logo} alt={partner.name} />
                            </div>
                            <div className="partner-info">
                                <h4 className="partner-name">{partner.name}</h4>
                                <p className="partner-description">{partner.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="partners-cta">
                    <p>Quer ser nosso parceiro?</p>
                    <a href="/#contactar" className="cta-button">
                        Entre em contato
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
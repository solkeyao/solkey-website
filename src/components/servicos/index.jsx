import './index.css';

export default function Servicos(){
    const services = [
        {
            id: 1,
            title: "Desenvolvimento Web",
            description: "Tenha um site de alta performance, design impecável, técnicas infalíveis de SEO e controle sobre tudo!",
            icon: "/assets/ser_desenvolvimento.png",
            features: ["Sites responsivos", "Otimização SEO", "Alta performance", "Controle total"]
        },
        {
            id: 2,
            title: "Marketing Digital",
            description: "Ganhe visibilidade, transforme visitantes em clientes, conheça estratégias digitais e entre no mundo do digital de forma simples.",
            icon: "/assets/ser_marketing.png",
            features: ["Google Meu Negócio", "Gestão de redes sociais", "Campanhas publicitárias", "Analytics e relatórios"]
        },
        {
            id: 3,
            title: "Design Gráfico",
            description: "Mostre o potencial da sua marca através de um branding bem elaborado. Crie posicionamento de marca através da sua combinação de cores ideal, logotipo e storytelling.",
            icon: "/assets/ser_design.png",
            features: ["Identidade visual", "Logotipos", "Material impresso", "Branding completo"]
        }
    ];

    return (
        <section className='d-section servicos' id='servicos'>
            <div className="container">
                <div className="section-header">
                    <h2 className='section-title'>Nossa expertise</h2>
                    <p className='section-subtitle'>Soluções completas para impulsionar seu negócio digital</p>
                    </div>
                
                <div className='services-grid'>
                    {services.map((service) => (
                        <div key={service.id} className='service-card'>
                            <div className="service-icon">
                                <img src={service.icon} alt={service.title} />
                    </div>
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="feature-item">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 13l4 4L19 7"/>
                                            </svg>
                                            {feature}
                </li>
                                    ))}
                                </ul>
                                <a href="/#contactar" className="service-cta">
                                    Saber mais
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                    </div>
        </section>
    );
}
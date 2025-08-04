import './index.css';
import { motion } from 'framer-motion';

export default function QuemSomos() {
    return (
        <section className='quem-somos-section' id='quem-somos'>
            <div className="container">
                {/* Header Section */}
                <div className="header-section">
                    <h1 className="main-title">
                        Quem Somos
                    </h1>
                    <p className="subtitle">
                        Transformando ideias em realidade digital
                    </p>
                </div>

                {/* Main Content */}
                <div className="content-wrapper">
                    {/* Company Image */}
                    <div className="image-section">
                        <div className="image-container">
                            <img 
                                className="company-logo" 
                                src="/assets/solkey.png" 
                                alt="Sol Key Logo" 
                            />
                        </div>
                    </div>

                    {/* Company Description */}
                    <div className="description-section">
                        <div className="mission-card">
                            <div className="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Nossa Missão</h3>
                            <p>
                                Na Sol Key, somos apaixonados por tecnologia e dedicados a
                                impulsionar o sucesso de nossos clientes por meio de soluções
                                inovadoras e personalizadas.
                            </p>
                        </div>

                        <div className="services-card">
                            <div className="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h3>Nossos Serviços</h3>
                            <p>
                                Como uma empresa de tecnologia multifacetada, oferecemos uma gama abrangente de serviços
                                projetados para atender às diversas necessidades do mundo empresarial moderno.
                            </p>
                        </div>

                        <div className="commitment-card">
                            <div className="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Nosso Compromisso</h3>
                            <p>
                                Nosso compromisso é fornecer soluções sob medida que não apenas atendam, mas superem as expectativas de nossos clientes.
                            </p>
                        </div>

                        <div className="partnership-card">
                            <div className="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M23 21V19C23 18.1137 22.6488 17.2628 22.0123 16.6123C21.3758 15.9618 20.4832 15.5556 19.6 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 3.13C16.8701 3.35031 17.623 3.85071 18.1679 4.55232C18.7128 5.25392 19.0218 6.11853 19.06 7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Parcerias Duradouras</h3>
                            <p>
                                Desde startups ambiciosas até grandes corporações, trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades exclusivas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="values-section">
                    <h2 className="section-title">Nossos Valores</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <div className="value-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h4>Inovação</h4>
                            <p>Sempre buscando as melhores soluções tecnológicas</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h4>Qualidade</h4>
                            <p>Compromisso inabalável com a excelência</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h4>Confiança</h4>
                            <p>Parcerias duradouras baseadas na confiança</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="cta-section">
                    <h3>Pronto para Transformar sua Visão em Realidade?</h3>
                    <p>Junte-se a nós enquanto exploramos novas possibilidades e transformamos sua visão em realidade.</p>
                    <button className="cta-button">
                        Comece Agora
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
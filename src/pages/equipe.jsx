import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";
import './equipe.css';

export default function Equipe() {
    const teamMembers = [
        {
            id: 1,
            name: "Abraão Gunji",
            role: "CEO & Fundador",
            image: "/assets/membros/abraao.png",
            description: "Especialista em estratégia digital com mais de 10 anos de experiência em transformação digital e desenvolvimento de negócios.",
            social: { linkedin: "#", twitter: "#", github: "#" }
        },
        {
            id: 2,
            name: "Adenilson da Costa Cabeco",
            role: "Diretor de Tecnologia",
            image: "/assets/membros/adenilson.JPG",
            description: "Desenvolvedor full-stack com expertise em React, Node.js e arquiteturas escaláveis para aplicações web modernas.",
            social: { linkedin: "#", twitter: "#", github: "#" }
        },
        {
            id: 3,
            name: "Adão Bamba",
            role: "Designer Senior",
            image: "/assets/membros/adao.jpg",
            description: "Designer criativo especializado em UX/UI, branding e design de interfaces que conectam marcas com seus usuários.",
            social: { linkedin: "#", twitter: "#", github: "#" }
        },
        {
            id: 4,
            name: "Sebastião Sukuakueche",
            role: "Marketing Digital",
            image: "/assets/membros/admiro.jpg",
            description: "Estrategista de marketing digital focado em crescimento de negócios através de campanhas inovadoras e análise de dados.",
            social: { linkedin: "#", twitter: "#", github: "#" }
        }
    ];

    return (
        <>
            <Toaster />
            <Navbar />
            <main className="equipe-page">
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Conheça nossa <span className="highlight">equipe</span>
                            </h1>
                            <p className="hero-description">
                                Somos uma equipe apaixonada por tecnologia e inovação, 
                                dedicada a transformar ideias em soluções digitais excepcionais 
                                que impulsionam o sucesso dos nossos clientes.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="team-section">
                    <div className="container">
                        <div className="team-grid">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="team-card">
                                    <div className="member-image">
                                        <img src={member.image} alt={member.name} />
                                        <div className="social-overlay">
                                            <div className="social-links">
                                                <a href={member.social.linkedin} className="social-link" title="LinkedIn">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                                        <rect x="2" y="9" width="4" height="12"/>
                                                        <circle cx="4" cy="4" r="2"/>
                                                    </svg>
                                                </a>
                                                <a href={member.social.twitter} className="social-link" title="Twitter">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                                                    </svg>
                                                </a>
                                                <a href={member.social.github} className="social-link" title="GitHub">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h3 className="member-name">{member.name}</h3>
                                        <p className="member-role">{member.role}</p>
                                        <p className="member-description">{member.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Pronto para trabalhar conosco?</h2>
                            <p>
                                Nossa equipe está pronta para transformar sua visão em realidade. 
                                Entre em contato e vamos criar algo incrível juntos.
                            </p>
                            <a href="/#contactar" className="cta-button">
                                Iniciar projeto
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
} 
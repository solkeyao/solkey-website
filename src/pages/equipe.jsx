import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";
import { motion } from 'framer-motion';
import './equipe.css';

export default function Equipe() {
    const teamMembers = [
        {
            id: 1,
            name: "Adenilson da Costa Cabeco",
            role: "Diretor Geral",
            image: "/assets/membros/adenilson.JPG",
            description: "Líder estratégico com visão abrangente para o crescimento da empresa. Responsável pela gestão geral, desenvolvimento de estratégias de negócio e supervisão de todas as operações da Sol Key.",
            social: { linkedin: "https://www.linkedin.com/in/adenilson-marco-dacosta-cabeco-977433224/", twitter: "#", github: "#" }
        },
        {
            id: 2,
            name: "Abraão Gunji",
            role: "Sub-Director",
            image: "/assets/membros/abraao.png",
            description: "Executivo sênior focado em operações e desenvolvimento organizacional. Coordena projetos estratégicos e garante a excelência operacional em todos os departamentos da empresa.",
            social: { linkedin: "https://www.linkedin.com/in/abraaogunji/", twitter: "#", github: "#" }
        },
       
        {
            id: 3,
            name: "Adão Bamba",
            role: "Director de Planeamento",
            image: "/assets/membros/adao.jpg",
            description: "Estrategista de planeamento responsável pela definição de metas, análise de mercado e desenvolvimento de planos estratégicos para o crescimento sustentável da Sol Key.",
            social: { linkedin: "https://www.linkedin.com/in/ad%C3%A3o-bamba-2373511aa/", twitter: "#", github: "#" }
        },
        {
            id: 4,
            name: "Sebastião Sukuakueche",
            role: "Director de Tecnologia",
            image: "/assets/membros/admiro.jpg",
            description: "Especialista em inovação tecnológica e arquitetura de sistemas. Lidera o desenvolvimento de soluções digitais avançadas e garante a excelência técnica em todos os projetos.",
            social: { linkedin: "https://www.linkedin.com/in/sebastiao-sukuakueche/", twitter: "#", github: "#" }
        }
    ];

    // Função para verificar se um link é válido
    const isValidLink = (link) => {
        return link && link !== "#" && link !== "" && link !== null && link !== undefined;
    };

    // Variantes de animação
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const heroVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const teamCardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const socialVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <Toaster />
            <Navbar startSection={5} />
            <motion.main 
                className="equipe-page"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.section 
                    className="hero-section"
                    variants={heroVariants}
                >
                    <div className="container">
                        <div className="hero-content">
                            <motion.h1 
                                className="hero-title"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Conheça nossa <span className="highlight">equipe</span>
                            </motion.h1>
                            <motion.p 
                                className="hero-description"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Somos uma equipe apaixonada por tecnologia e inovação, 
                                dedicada a transformar ideias em soluções digitais excepcionais 
                                que impulsionam o sucesso dos nossos clientes.
                            </motion.p>
                        </div>
                    </div>
                </motion.section>

                <motion.section 
                    className="team-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <div className="container">
                        <motion.div 
                            className="team-grid"
                            variants={containerVariants}
                        >
                            {teamMembers.map((member, index) => (
                                <motion.div 
                                    key={member.id} 
                                    className="team-card"
                                    variants={teamCardVariants}
                                    whileHover={{ 
                                        y: -10,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <div className="member-image">
                                        <motion.img 
                                            src={member.image} 
                                            alt={member.name}
                                            whileHover={{ 
                                                scale: 1.05,
                                                transition: { duration: 0.3 }
                                            }}
                                        />
                                        <motion.div 
                                            className="social-overlay"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div 
                                                className="social-links"
                                                variants={containerVariants}
                                            >
                                                {isValidLink(member.social.linkedin) && (
                                                    <motion.a 
                                                        href={member.social.linkedin} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="social-link" 
                                                        title="LinkedIn"
                                                        variants={socialVariants}
                                                        whileHover={{ 
                                                            scale: 1.2,
                                                            y: -3,
                                                            transition: { duration: 0.2 }
                                                        }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                                            <rect x="2" y="9" width="4" height="12"/>
                                                            <circle cx="4" cy="4" r="2"/>
                                                        </svg>
                                                    </motion.a>
                                                )}
                                                {isValidLink(member.social.twitter) && (
                                                    <motion.a 
                                                        href={member.social.twitter} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="social-link" 
                                                        title="Twitter"
                                                        variants={socialVariants}
                                                        whileHover={{ 
                                                            scale: 1.2,
                                                            y: -3,
                                                            transition: { duration: 0.2 }
                                                        }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                                                        </svg>
                                                    </motion.a>
                                                )}
                                                {isValidLink(member.social.github) && (
                                                    <motion.a 
                                                        href={member.social.github} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="social-link" 
                                                        title="GitHub"
                                                        variants={socialVariants}
                                                        whileHover={{ 
                                                            scale: 1.2,
                                                            y: -3,
                                                            transition: { duration: 0.2 }
                                                        }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                                        </svg>
                                                    </motion.a>
                                                )}
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                    <motion.div 
                                        className="member-info"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.h3 
                                            className="member-name"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            viewport={{ once: true }}
                                        >
                                            {member.name}
                                        </motion.h3>
                                        <motion.p 
                                            className="member-role"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            {member.role}
                                        </motion.p>
                                        <motion.p 
                                            className="member-description"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.6 }}
                                            viewport={{ once: true }}
                                        >
                                            {member.description}
                                        </motion.p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section 
                    className="cta-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={heroVariants}
                >
                    <div className="container">
                        <motion.div 
                            className="cta-content"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                Pronto para trabalhar conosco?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Nossa equipe está pronta para transformar sua visão em realidade. 
                                Entre em contato e vamos criar algo incrível juntos.
                            </motion.p>
                            <motion.a 
                                href="/#contactar" 
                                className="cta-button"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ 
                                    scale: 0.95,
                                    transition: { duration: 0.1 }
                                }}
                            >
                                Iniciar projeto
                                <motion.svg 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </motion.svg>
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.section>
            </motion.main>
            <Footer />
        </>
    );
} 
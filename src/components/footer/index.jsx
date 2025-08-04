import './index.css';
import { motion } from 'framer-motion';

export default function Footer(){
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

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
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
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const newsletterVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.footer 
            className='footer'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="container">
                <motion.div 
                    className="footer-content"
                    variants={containerVariants}
                >
                    <motion.div 
                        className="footer-section"
                        variants={sectionVariants}
                    >
                        <motion.div 
                            className="footer-brand"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <motion.div 
                                className='footer-logo'
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <span className='highlight'>Sol</span>Key
                            </motion.div>
                            <motion.p 
                                className='footer-description'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                Transformando ideias em realidade digital. Especialistas em desenvolvimento web, 
                                marketing digital e design gráfico para impulsionar seu negócio com soluções 
                                tecnológicas inovadoras e resultados mensuráveis.
                            </motion.p>
                        </motion.div>
                        
                        <motion.div 
                            className="footer-social"
                            variants={sectionVariants}
                        >
                            <motion.h4
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Redes Sociais
                            </motion.h4>
                            <motion.div 
                                className="social-links"
                                variants={containerVariants}
                            >
                                <motion.a 
                                    href="https://www.facebook.com/profile.php?id=100063807830535" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-link" 
                                    title="Facebook"
                                    variants={socialVariants}
                                    whileHover={{ 
                                        scale: 1.2,
                                        y: -3,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="footer-section"
                        variants={sectionVariants}
                    >
                        <motion.h4
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Serviços
                        </motion.h4>
                        <motion.ul 
                            className="footer-links"
                            variants={containerVariants}
                        >
                            {[
                                "Desenvolvimento Web",
                                "Marketing Digital", 
                                "Design Gráfico",
                                "Consultoria",
                                "SEO & Otimização",
                                "E-commerce",
                                "Aplicações Mobile"
                            ].map((service, index) => (
                                <motion.li 
                                    key={index}
                                    variants={linkVariants}
                                    whileHover={{ 
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <a href="/#servicos">{service}</a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                    
                    <motion.div 
                        className="footer-section"
                        variants={sectionVariants}
                    >
                        <motion.h4
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Empresa
                        </motion.h4>
                        <motion.ul 
                            className="footer-links"
                            variants={containerVariants}
                        >
                            {[
                                { text: "Quem Somos", href: "/quem-somos" },
                                { text: "Nossa Equipe", href: "/equipe" },
                                { text: "Projetos", href: "/#projectos" },
                                { text: "Parceiros", href: "/#parceiros" },
                                { text: "Contato", href: "/#contactar" }
                            ].map((item, index) => (
                                <motion.li 
                                    key={index}
                                    variants={linkVariants}
                                    whileHover={{ 
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <a href={item.href}>{item.text}</a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                    
                    <motion.div 
                        className="footer-section"
                        variants={sectionVariants}
                    >
                        <motion.h4
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Contato
                        </motion.h4>
                        <motion.div 
                            className="contact-info"
                            variants={containerVariants}
                        >
                            {[
                                {
                                    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
                                    text: "Urbanização Nova Vida, Rua 181 Nº6024, Luanda, Angola"
                                },
                                {
                                    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
                                    text: "solkey.ao@gmail.com"
                                },
                                {
                                    icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                                    text: "+244 939 416 647"
                                },
                                {
                                    icon: "M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M12 6v6l4 2",
                                    text: "Seg - Sex: 8h às 18h"
                                }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="contact-item"
                                    variants={linkVariants}
                                    whileHover={{ 
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <motion.svg 
                                        width="16" 
                                        height="16" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                        whileHover={{ 
                                            scale: 1.2,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <path d={item.icon}/>
                                    </motion.svg>
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="footer-newsletter"
                    variants={newsletterVariants}
                >
                    <motion.div 
                        className="newsletter-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.h4
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Newsletter
                        </motion.h4>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Receba as últimas novidades, dicas de marketing digital e insights sobre tecnologia
                        </motion.p>
                        <motion.form 
                            className="newsletter-form"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            viewport={{ once: true }}
                        >
                            <motion.input 
                                type="email" 
                                placeholder="Seu email" 
                                required
                                whileFocus={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            />
                            <motion.button 
                                type="submit"
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ 
                                    scale: 0.95,
                                    transition: { duration: 0.1 }
                                }}
                            >
                                <motion.svg 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2"
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </motion.svg>
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="footer-bottom"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    viewport={{ once: true }}
                >
                    <div className="footer-copyright">
                        <p>&copy; 2025 SolKey. Todos os direitos reservados.</p>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
}
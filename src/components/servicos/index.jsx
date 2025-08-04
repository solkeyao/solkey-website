import './index.css';
import { motion } from 'framer-motion';

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

    // Variantes de animação
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.1
            }
        }
    };

    const headerVariants = {
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

    const serviceCardVariants = {
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

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const featureVariants = {
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

    return (
        <motion.section 
            className='d-section servicos' 
            id='servicos'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="container">
                <motion.div 
                    className="section-header"
                    variants={headerVariants}
                >
                    <motion.h2 
                        className='section-title'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Nossa expertise
                    </motion.h2>
                    <motion.p 
                        className='section-subtitle'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Soluções completas para impulsionar seu negócio digital
                    </motion.p>
                </motion.div>
                
                <motion.div 
                    className='services-grid'
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <motion.div 
                            key={service.id} 
                            className='service-card'
                            variants={serviceCardVariants}
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
                            <motion.div 
                                className="service-icon"
                                variants={iconVariants}
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.img 
                                    src={service.icon} 
                                    alt={service.title}
                                    whileHover={{ 
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                />
                            </motion.div>
                            <motion.div 
                                className="service-content"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <motion.h3 
                                    className="service-title"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    {service.title}
                                </motion.h3>
                                <motion.p 
                                    className="service-description"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {service.description}
                                </motion.p>
                                <motion.ul 
                                    className="service-features"
                                    variants={containerVariants}
                                >
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.li 
                                            key={featureIndex} 
                                            className="feature-item"
                                            variants={featureVariants}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ 
                                                duration: 0.4, 
                                                delay: 0.6 + featureIndex * 0.1 
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <motion.svg 
                                                width="16" 
                                                height="16" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="2"
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <path d="M5 13l4 4L19 7"/>
                                            </motion.svg>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                                <motion.a 
                                    href="/#contactar" 
                                    className="service-cta"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
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
                                    Saber mais
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
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
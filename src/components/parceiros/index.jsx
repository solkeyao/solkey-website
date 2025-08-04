import './index.css';
import { motion } from 'framer-motion';

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

    const partnerCardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -5 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            className='partners-section' 
            id='parceiros'
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
                        Confiado por
                    </motion.h2>
                    <motion.p 
                        className='section-subtitle'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Empresas que confiam em nossas soluções digitais
                    </motion.p>
                </motion.div>
                
                <motion.div 
                    className='partners-grid'
                    variants={containerVariants}
                >
                    {partners.map((partner, index) => (
                        <motion.div 
                            key={partner.id} 
                            className='partner-card'
                            variants={partnerCardVariants}
                            whileHover={{ 
                                y: -8,
                                scale: 1.03,
                                transition: { duration: 0.3 }
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <motion.div 
                                className="partner-logo"
                                variants={logoVariants}
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 2,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.img 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    whileHover={{ 
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                />
                            </motion.div>
                            <motion.div 
                                className="partner-info"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <motion.h4 
                                    className="partner-name"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    {partner.name}
                                </motion.h4>
                                <motion.p 
                                    className="partner-description"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {partner.description}
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
                
            </div>
        </motion.section>
    );
}
import './index.css';
import { motion } from 'framer-motion';

export default function Header({navbar=''}){
    // Variantes de animação
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, x: 100 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
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

    const iconVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.header 
            className="header"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {navbar}
            <div className="header_main">
                <motion.div 
                    className="header_content"
                    variants={containerVariants}
                >
                    <motion.h1
                        variants={textVariants}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Transformando <span className="highlight">ideias em realidade digital</span>
                    </motion.h1>
                    <motion.p 
                        className="text-justify"
                        variants={textVariants}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Somos especialistas em desenvolvimento web, marketing digital e design gráfico. 
                        Criamos soluções tecnológicas personalizadas que impulsionam o crescimento do seu negócio, 
                        desde websites modernos até estratégias de marketing que geram resultados reais.
                    </motion.p>
                    
                    <motion.div 
                        className="header_buttons"
                        variants={containerVariants}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <motion.a 
                            className="btn_primary" 
                            href="/#contactar"
                            variants={buttonVariants}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ 
                                scale: 0.95,
                                transition: { duration: 0.1 }
                            }}
                        >
                            Iniciar um projeto
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
                        <motion.a 
                            className="btn_secondary" 
                            href="/#servicos"
                            variants={buttonVariants}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ 
                                scale: 0.95,
                                transition: { duration: 0.1 }
                            }}
                        >
                            Nossos serviços
                        </motion.a>
                    </motion.div>
                   
                </motion.div>
                <motion.div 
                    className="header_image"
                    variants={imageVariants}
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <div className="h_image_main">
                        <motion.img 
                            className="h_image_1" 
                            width='220px'  
                            src="/assets/image_1.png" 
                            alt=""
                            initial={{ opacity: 0, y: 50, rotate: -10 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.3 }
                            }}
                        />
                        <motion.img 
                            className="h_image_2"
                            width='400px' 
                            src="/assets/image_coding.png" 
                            alt=""
                            initial={{ opacity: 0, y: 50, rotate: 10 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            whileHover={{ 
                                scale: 1.05,
                                rotate: -5,
                                transition: { duration: 0.3 }
                            }}
                        />
                    </div>
                </motion.div>

                <motion.img 
                    className="icon_continue" 
                    src="/assets/icon_1.png" 
                    alt="Icon Continue"
                    variants={iconVariants}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    whileHover={{ 
                        y: -10,
                        transition: { duration: 0.3 }
                    }}
                />
            </div>
        </motion.header>
    );
}
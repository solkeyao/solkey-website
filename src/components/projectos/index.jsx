import './index.css';
import { motion } from 'framer-motion';

export default function Projectos(){
    const projects = [
        {
            id: 1,
            title: "Mimbu - Plataforma Digital",
            category: "Website • Branding • Marketing",
            description: "Desenvolvimento completo de plataforma digital com foco em experiência do usuário e conversão.",
            image: "/assets/mimbu_1.jpeg",
            link: "https://mimbu.net",
            tags: ["Website", "Branding", "Marketing"]
        },

        /*
        {
            id: 2,
            title: "KeyPay - Solução Financeira",
            category: "Mobile App • Fintech • UX/UI",
            description: "Aplicação móvel para gestão financeira pessoal e empresarial com interface intuitiva.",
            image: "/assets/keypay.png",
            link: "#",
            tags: ["Mobile", "Fintech", "UX/UI"]
        }*/
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

    const projectCardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
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

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            className='d-section projectos' 
            id='projectos'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="container">
                <motion.div className="section-header" variants={headerVariants}>
                    <motion.h2 
                        className='section-title'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Nossos trabalhos
                    </motion.h2>
                    <motion.p 
                        className='section-subtitle'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Projetos que transformaram ideias em realidade digital
                    </motion.p>
                </motion.div>
                
                <motion.div 
                    className='projects-grid'
                    variants={containerVariants}
                >
                    {projects.map((project, index) => (
                        <motion.div 
                            key={project.id} 
                            className='project-card'
                            variants={projectCardVariants}
                            whileHover={{ 
                                y: -15,
                                transition: { duration: 0.3 }
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="project-image">
                                <motion.img 
                                    src={project.image} 
                                    alt={project.title}
                                    whileHover={{ 
                                        scale: 1.1,
                                        transition: { duration: 0.4 }
                                    }}
                                />
                                <motion.div 
                                    className="project-overlay"
                                    variants={overlayVariants}
                                    whileHover="visible"
                                    initial="hidden"
                                >
                                    <motion.div 
                                        className="project-info"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <motion.h3 
                                            className="project-title"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                        >
                                            {project.title}
                                        </motion.h3>
                                        <motion.p 
                                            className="project-category"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.3 }}
                                        >
                                            {project.category}
                                        </motion.p>
                                        <motion.p 
                                            className="project-description"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.4 }}
                                        >
                                            {project.description}
                                        </motion.p>
                                        <motion.div 
                                            className="project-tags"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.5 }}
                                        >
                                            {project.tags.map((tag, tagIndex) => (
                                                <motion.span 
                                                    key={tagIndex} 
                                                    className="project-tag"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileHover={{ 
                                                        opacity: 1, 
                                                        scale: 1,
                                                        transition: { duration: 0.2 }
                                                    }}
                                                    transition={{ delay: 0.6 + tagIndex * 0.1 }}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                        <motion.a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="project-link"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileHover={{ 
                                                opacity: 1, 
                                                y: 0,
                                                scale: 1.05,
                                                transition: { duration: 0.3 }
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ delay: 0.7 }}
                                        >
                                            Ver projeto
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
                                                <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                            </motion.svg>
                                        </motion.a>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
            </div>
        </motion.section>
    );
}
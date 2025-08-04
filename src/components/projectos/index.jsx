import './index.css';

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

    return (
        <section className='d-section projectos' id='projectos'>
            <div className="container">
                <div className="section-header">
                    <h2 className='section-title'>Nossos trabalhos</h2>
                    <p className='section-subtitle'>Projetos que transformaram ideias em realidade digital</p>
                </div>
                
                <div className='projects-grid'>
                    {projects.map((project) => (
                        <div key={project.id} className='project-card'>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-category">{project.category}</p>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tags">
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className="project-tag">{tag}</span>
                                            ))}
                                        </div>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            Ver projeto
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}
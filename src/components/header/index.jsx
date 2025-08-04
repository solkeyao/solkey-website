import './index.css';

export default function Header({navbar=''}){
    return (
        <header className="header">
            {navbar}
            <div className="header_main">
                <div className="header_content">
                    <h1>
                        Transformando <span className="highlight">ideias em realidade digital</span>
                    </h1>
                    <p className="text-justify">
                        Somos especialistas em desenvolvimento web, marketing digital e design gráfico. 
                        Criamos soluções tecnológicas personalizadas que impulsionam o crescimento do seu negócio, 
                        desde websites modernos até estratégias de marketing que geram resultados reais.
                    </p>
                    
                    <div className="header_buttons">
                        <a className="btn_primary" href="/#contactar">
                            Iniciar um projeto
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                        <a className="btn_secondary" href="/#servicos">
                            Nossos serviços
                        </a>
                    </div>
                   
                </div>
                <div className="header_image">
                    <div className="h_image_main">
                        <img className="h_image_1" width='220px'  src="/assets/image_1.png" alt="" />
                        <img className="h_image_2"
                        width='400px' src="/assets/image_coding.png" alt="" />
                    </div>
                </div>

                <img className="icon_continue" src="/assets/icon_1.png" alt="Icon Continue" />
            </div>
        </header>
    );
}
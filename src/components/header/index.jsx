import './index.css';

export default function Header({navbar=''}){
    return (
        <header className="header">
            {navbar}
            <div className="header_main">
                <div className="header_content">
                    <h1>
                        Transformando ideias em realidade:
                    </h1>
                    <p className="text-justify">
                        Soluções tecnológicas personalizadas
                        para impulsionar o sucesso da sua 
                        empresa. Descubra como a KeySolution 
                        pode ajudar você a alcançar seus 
                        objetivos de negócios com inovação,
                        expertise e excelência.
                    </p>
                    
                    <a className="btn_seguir" href="/#quem-somos">Seguir
                        <img width='20px' src="/assets/icon_right.png" alt="Icon Right" />
                    </a>
                   
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
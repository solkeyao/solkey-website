import './index.css';

export default function Footer(){
    return (
        <footer className='d-section footer'>
            <div>
                <div className='fot_name'>
                    <span className='azul'>Key</span>Solution
                </div>
                <div className='fot_desc'>
                    Desbloqueando Soluções 
                    Tecnológicas para o Sucesso
                    Empresarial
                </div>
                <ul className='fot_redes'>
                    <li className='fot_rede'>
                        <a href="https://www.facebook.com/profile.php?id=100063807830535"
                        target="_blank">
                            <img src="/assets/icon_facebook.png" alt="Icon Facebook" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='fot_info_section'>
                <ul className='fot_infos'>
                    <li className='fot_info'>
                        <img width='24px' src="/assets/icon_endereco.png" alt="" />
                        Urbanização Nova Vida, Rua 181 Nº6024, Luanda
                    </li>

                    <li  className='fot_info'>
                        <img width='24px' src="/assets/icon_email.png" alt="" />
                        KeySolution004@hotmail.com
                    </li>

                    
                    <li  className='fot_info'>
                        <img width='24px' src="/assets/icon_tel.png" alt="" />
                        939 416 647
                    </li>
                </ul>
            </div>
            {/* Mapa
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15766.527077414623!2d13.230997!3d-8.913783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f5ae233488fd%3A0x20374a766e8a7d8e!2sGESPRIN%20BUSINESS%20CENTER%20%26%20COWORKING!5e0!3m2!1spt-PT!2sao!4v1709987591710!5m2!1spt-PT!2sao" 
             width="300" height="200" style={{
                border: '0'
             }} allowfullscreen=""
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               */}

            </footer>
    );
}
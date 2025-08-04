import './index.css';

export default function Footer(){
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-brand">
                            <div className='footer-logo'>
                                <span className='highlight'>Sol</span>Key
                            </div>
                            <p className='footer-description'>
                                Transformando ideias em realidade digital. Especialistas em desenvolvimento web, 
                                marketing digital e design gráfico para impulsionar seu negócio com soluções 
                                tecnológicas inovadoras e resultados mensuráveis.
                            </p>
                        </div>
                        
                        <div className="footer-social">
                            <h4>Redes Sociais</h4>
                            <div className="social-links">
                                <a href="https://www.facebook.com/profile.php?id=100063807830535" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                {/**
                                <a href="#" className="social-link" title="Twitter">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </a>
                                <a href="#" className="social-link" title="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>*/}
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Serviços</h4>
                        <ul className="footer-links">
                            <li><a href="/#servicos">Desenvolvimento Web</a></li>
                            <li><a href="/#servicos">Marketing Digital</a></li>
                            <li><a href="/#servicos">Design Gráfico</a></li>
                            <li><a href="/#servicos">Consultoria</a></li>
                            <li><a href="/#servicos">SEO & Otimização</a></li>
                            <li><a href="/#servicos">E-commerce</a></li>
                            <li><a href="/#servicos">Aplicações Mobile</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Empresa</h4>
                        <ul className="footer-links">
                            <li><a href="/quem-somos">Quem Somos</a></li>
                            <li><a href="/equipe">Nossa Equipe</a></li>
                            <li><a href="/#projectos">Projetos</a></li>
                            <li><a href="/#parceiros">Parceiros</a></li>
                            <li><a href="/#contactar">Contato</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Contato</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                <span>Urbanização Nova Vida, Rua 181 Nº6024, Luanda, Angola</span>
                            </div>
                            <div className="contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                <span>solkey.ao@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span>+244 939 416 647</span>
                            </div>
                            <div className="contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                                <span>Seg - Sex: 8h às 18h</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-newsletter">
                    <div className="newsletter-content">
                        <h4>Newsletter</h4>
                        <p>Receba as últimas novidades, dicas de marketing digital e insights sobre tecnologia</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Seu email" required />
                            <button type="submit">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; 2025 SolKey. Todos os direitos reservados.</p>
                    </div>
                    {
                    /** 
                    <div className="footer-legal">
                        <a href="#">Termos de Uso</a>
                        <a href="#">Política de Privacidade</a>
                    </div>
                    */
                }
                </div>
            </div>
        </footer>
    );
}
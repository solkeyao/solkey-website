import { useEffect, useState } from "react";
import './index.css';
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar({ startSection = 0 }) {
    const [currentSection, setCurrentSection] = useState(startSection);
    const [showNavLinks, setShowNavLinks] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { hash } = useLocation();

    function activeNavLink(id) {
        setCurrentSection(id);
        setShowNavLinks(false);
    }

    function toogleNavMenu(ev) {
        ev.stopPropagation();
        setShowNavLinks(!showNavLinks);
    }

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.addEventListener('click', () => {
            setShowNavLinks(false);
        });

        const h = hash.replace('#', '');
        switch(h){
            case 'servicos':
                setCurrentSection(1)
                break;
            case 'parceiros':
                setCurrentSection(2);
                break;
            case 'projectos':
                setCurrentSection(3);
                break;
        }
        if(h != ''){
            const element = document.getElementById(h);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    const navItems = [
        { id: 0, label: 'Home', href: '/#', isAnchor: true },
        { id: 1, label: 'Serviços', href: '/#servicos', isAnchor: true },
        { id: 2, label: 'Parceiros', href: '/#parceiros', isAnchor: true },
        { id: 3, label: 'Projetos', href: '/#projectos', isAnchor: true },
        { id: 4, label: 'Quem Somos', href: '/quem-somos', isAnchor: false },
        { id: 5, label: 'Equipe', href: '/equipe', isAnchor: false }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="nav-container">
                <NavLink className="nav_logo" to="/">
                    <img width='32px' src="/assets/solkey_icon.png" alt="Sol Key icon" />
                    <span>SolKey</span>
                </NavLink>

                <ul className={`nav_links ${showNavLinks ? 'nav_links_show' : ''}`}>
                    {navItems.map((item) => (
                        <li 
                            key={item.id}
                            className={`nav_link ${currentSection === item.id ? 'nav_link_active' : ''}`}
                            onClick={(ev) => {
                                ev.stopPropagation();
                                activeNavLink(item.id);
                            }}
                        >
                            {item.isAnchor ? (
                                <a href={item.href}>{item.label}</a>
                            ) : (
                                <NavLink to={item.href}>{item.label}</NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="nav_actions">
                    <a className="btn_contactar" href="/#contactar">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        Contactar
                    </a>

                    <button className="nav_menu" onClick={toogleNavMenu} aria-label="Menu">
                        <div className={`hamburger ${showNavLinks ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
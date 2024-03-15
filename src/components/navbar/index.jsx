import { useEffect, useState } from "react";
import './index.css';
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar({ startSection = 0 }) {
    const [currentSection, setCurrentSection] = useState(startSection);
    const [showNavLinks, setShowNavLinks] = useState(false);

    const {  hash } = useLocation();

    function activeNavLink(id) {
        setCurrentSection(id);
        setShowNavLinks(false);
    }

    function toogleNavMenu(ev) {
        ev.stopPropagation();
        setShowNavLinks(!showNavLinks);
    }


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
              element.scrollIntoView();
            }
        }

       
    }, []);
    return (
        <nav className="navbar">
            <a className="nav_logo" href="/#">
                <img width='32px' src="/assets/keysolution_icon.png" alt="Keysolution icon" />
                KeySolution
            </a>

            <ul className={"nav_links " + (showNavLinks ? 'nav_links_show' : '')}>
                <li className={"nav_link " +
                    (currentSection == 0 ? 'nav_link_active' : '')} onClick={
                        (ev) => {
                            ev.stopPropagation();
                            activeNavLink(0)
                        }
                    }>
                    <a href="/#">Home</a>
                </li>




                <li className={"nav_link " +
                    (currentSection == 1 ? 'nav_link_active' : '')} onClick={
                        (ev) => {
                            ev.stopPropagation();
                            activeNavLink(1)
                        }
                    }>
                    <a href="/#servicos">Serviços</a>
                </li>
                <li className={"nav_link " +
                    (currentSection == 2 ? 'nav_link_active' : '')} onClick={
                        (ev) => {
                            ev.stopPropagation();
                            activeNavLink(2)
                        }
                    }>
                    <a href="/#parceiros">Parceiros</a>
                </li>
                <li className={"nav_link " +
                    (currentSection == 3 ? 'nav_link_active' : '')}
                    onClick={
                        (ev) => {
                            ev.stopPropagation();
                            activeNavLink(3)
                        }
                    }>
                    <a href="/#projectos">Projectos</a>
                </li>

                <li className={"nav_link " +
                    (currentSection == 4 ? 'nav_link_active' : '')}>
                    <NavLink to="/quem-somos">Quem somos</NavLink>
                </li>
            </ul>
            <button className="nav_menu" onClick={toogleNavMenu}>
                <img width='24px' src="/assets/icon_menu.png" alt="Icon Menu" />
            </button>

            <div className="nav_right">
                <a className="btn_contactar" href="/#contactar">
                    <img src="/assets/icon_phone.png" alt="Phone Icon" />
                    Contactar
                </a>
            </div>
        </nav>
    );
}
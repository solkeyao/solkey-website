import { useEffect, useState } from "react";
import './index.css';

export default function Navbar(){
    const [currentSection, setCurrentSection] = useState(0);
    const [showNavLinks, setShowNavLinks] = useState(false);

    function activeNavLink(id){
        setCurrentSection(id);
        setShowNavLinks(false);
    }

    function toogleNavMenu(ev){
        ev.stopPropagation();
        setShowNavLinks(!showNavLinks);
    }


    useEffect(()=>{
        document.body.addEventListener('click', ()=>{
            setShowNavLinks(false);
        });
    }, []);
    return (
        <nav className="navbar">
                    <a className="nav_logo" href="/#">
                        <img width='32px'  src="/assets/keysolution_icon.png" alt="Keysolution icon" />
                        KeySolution
                    </a>

                    <ul className={"nav_links "+ (showNavLinks ? 'nav_links_show': '')}>
                        <li className={"nav_link " + 
                        (currentSection == 0 ?  'nav_link_active' : '')} onClick={
                            (ev)=>{
                                ev.stopPropagation();
                                activeNavLink(0)
                            }
                        }>
                            <a href="/#">Home</a>
                        </li>
                        {/*
                        <li className={"nav_link " + 
                        (currentSection == 1 ?  'nav_link_active' : '')} onClick={
                            (ev)=>{
                                ev.stopPropagation();
                                activeNavLink(1)
                            }
                        }>
                            <a href="/#quem-somos">Quem somos</a>
                        </li>

                         */}
                        <li className={"nav_link " + 
                        (currentSection == 2 ?  'nav_link_active' : '')} onClick={
                            (ev)=>{
                                ev.stopPropagation();
                                activeNavLink(2)
                            }
                        }>
                            <a href="/#servicos">Serviços</a>
                        </li>
                        <li className={"nav_link " + 
                        (currentSection == 3 ?  'nav_link_active' : '')} onClick={
                            (ev)=>{
                                ev.stopPropagation();
                                activeNavLink(3)
                            }
                        }>
                            <a href="/#parceiros">Parceiros</a>
                        </li>
                        <li className={"nav_link " + 
                        (currentSection == 4 ?  'nav_link_active' : '')}
                        onClick={
                            (ev)=>{
                                ev.stopPropagation();
                                activeNavLink(4)
                            }
                        }>
                            <a href="/#projectos">Projectos</a>
                        </li>
                    </ul>
                    <button className="nav_menu" onClick={toogleNavMenu}>
                        <img  width='24px' src="/assets/icon_menu.png" alt="Icon Menu" />
                    </button>

                    <div className="nav_right">
                        <a className="btn_contactar"  href="/#contactar">
                            <img src="/assets/icon_phone.png" alt="Phone Icon" />
                            Contactar
                        </a>
                    </div>
                </nav>
    );
}
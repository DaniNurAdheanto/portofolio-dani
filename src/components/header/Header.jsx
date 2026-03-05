import React, { useState } from 'react';
import "./header.css";
import { smoothScrollTo } from "../../utils/smoothScroll";

const Header = ({ toggleTheme, theme }) => {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const [Toggle, showMenu] = useState(false);
    const [activeNav, serActiveNav] = useState("#home")

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">
                    <span>Dani </span><span>Nur</span> Adheanto
                </a>
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grip">
                        <li className="nav_item">
                            <a href="#home" onClick={(e) => { e.preventDefault(); serActiveNav('#home'); smoothScrollTo('#home'); }} className={activeNav === "#home" ? "nav_link active-link" : "nav_link "}>
                                <i className="uil uil-estate nav_icon"></i> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" onClick={(e) => { e.preventDefault(); serActiveNav('#about'); smoothScrollTo('#about'); }} className={activeNav === "#about" ? "nav_link active-link" : "nav_link "}>
                                <i className="uil uil-user nav_icon"></i> About Us
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" onClick={(e) => { e.preventDefault(); serActiveNav('#skills'); smoothScrollTo('#skills'); }} className={activeNav === "#skills" ? "nav_link active-link" : "nav_link "}>
                                <i className="uil uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#portfolio" onClick={(e) => { e.preventDefault(); serActiveNav('#portfolio'); smoothScrollTo('#portfolio'); }} className={activeNav === "#portfolio" ? "nav_link active-link" : "nav_link "}>
                                <i className="uil uil-scenery nav_icon"></i> My Work
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" onClick={(e) => { e.preventDefault(); serActiveNav('#contact'); smoothScrollTo('#contact'); }} className={activeNav === "#contact" ? "nav_link active-link" : "nav_link "}>
                                <i className="uil uil-message nav_icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>

                <div className="theme_toggle" onClick={toggleTheme}>
                    <i className={theme === 'dark-theme' ? 'uil uil-sun' : 'uil uil-moon'}></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
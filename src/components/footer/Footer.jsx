import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Dani Nur Adheanto</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.instagram.com/daniinurrr/" className="home_social-icon" target="__blank">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/dani-nur-adheanto-723053229/" className="home_social-icon" target="__blank">
                        <i class="uil uil-linkedin"></i>
                    </a>
                    <a href="https://medium.com/@daninur84" className="home_social-icon" target="__blank">
                        <i class="uil uil-medium-m"></i>
                    </a>
                </div>

                <span className="footer_copy">Made With &#128151; - Dani Nur Adheanto </span>
            </div>
        </footer>
    )
}

export default Footer
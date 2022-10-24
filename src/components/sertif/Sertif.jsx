import React from 'react'
import './sertif.css'

const Sertif = () => {
    return (
        <section className="sertif section">
            <h2 className="section_title">
                Certificate
            </h2>
            <span className="section_subtitle">
                My Certificate
            </span>

            <div className="serfit_container container grid">
                <div className="sertif_content">
                    <div>
                        <i className="uil uil-arrow sertif_icon"></i>
                        <h3 className="sertif_title"> HTML <br /> & CSS</h3>
                        <h4 className="sertif_company"> Progate </h4>
                    </div>

                    <a href="https://progate.com/course_certificate/cabda332r7ab1g" target="__blank" className="serfit_button">
                        View Certificate <i className="bx bx-right-arrow-alt sertif_button-icon"></i>
                    </a>
                </div>

                <div className="sertif_content">
                    <div>
                        <i className="uil uil-web-grid-alt sertif_icon"></i>
                        <h3 className="sertif_title"> UI/UX Design <br /> Mastery (Gold)</h3>
                        <h4 className="sertif_company"> Skilvul </h4>
                    </div>

                    <a href="https://badgr.com/public/assertions/KSQxjskbRrW7ymDtwAUyoQ?identity__email=daninur84@gmail.com" target="__blank" className="serfit_button">
                        View Certificate <i className="bx bx-right-arrow-alt sertif_button-icon"></i>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Sertif
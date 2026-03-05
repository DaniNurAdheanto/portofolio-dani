import React from 'react'
import './sertif.css'
import { sertifData } from './SertifData'

const Sertif = () => {
    return (
        <section className="sertif section" id="sertif">
            <h2 className="section_title">
                Certificate
            </h2>
            <span className="section_subtitle">
                My Certificate
            </span>

            <div className="serfit_container container grid">
                {sertifData.map((cert) => (
                    <div key={cert.id} className="sertif_content">
                        <div>
                            <i className={`${cert.icon} sertif_icon`}></i>
                            <h3 className="sertif_title">
                                {cert.title}
                            </h3>
                            <h4 className="sertif_company">
                                {cert.company}
                            </h4>
                        </div>

                        <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="serfit_button"
                        >
                            View Certificate 
                            <i className="bx bx-right-arrow-alt sertif_button-icon"></i>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Sertif
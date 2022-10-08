import React from 'react'
import "./qualification.css"

function Qualification() {
    return (
        <section className="qualification section">
            <h2 className="section_title">
                Qualification
            </h2>
            <span className="section_subtitle">
                My Personal Journey
            </span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className="qualification_button qualification_active button--flex">
                        <i className="uil uil-graduation-cap qualification_icon"></i>{" "} Education
                    </div>

                    <div className="qualification_button button--flex">
                        <i className="uil uil-briefcase-alt qualification_icon"></i>{" "} Experience
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className="qualification_content">
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title"> Universitas Gunadarma</h3>
                                <span className="qualification_subtitle"></span>
                                <div className="qualication_calender">
                                    <i className="uil uil-calender-alt"></i> 2019 - Present
                                </div>
                            </div>

                            <div>
                                <span className="span qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="span qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title"> Universitas Gunadarma</h3>
                                <span className="qualification_subtitle"></span>
                                <div className="qualication_calender">
                                    <i className="uil uil-calender-alt"></i> 2019 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification; 
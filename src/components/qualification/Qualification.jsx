import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toogleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

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
                    <div className={toogleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i>  Education
                    </div>

                    <div className={toogleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i>  Exprerience
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className={toogleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Universitas Gunadarma
                                </h3>
                                <span className="qualification_subtitle">
                                    Informatika
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2019 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder">

                                </span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder">

                                </span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">
                                    SMAN 3 Babelan
                                </h3>
                                <span className="qualification_subtitle">
                                    IPA
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2019
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="qualification_sections">
                    <div className={toogleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    UI/UX Design Mastery Learning Path
                                </h3>
                                <span className="qualification_subtitle">
                                    Skilvul · Apprenticeship
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder">

                                </span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section >
    )
}

export default Qualification
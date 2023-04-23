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
                                    <p>GPA 3.70/4.0</p>
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
                                    <i className="uil uil-calendar-alt"></i> Aug 2022 - Des 2022
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
                                    Intensive Bootcamp UI/UX Research And Design
                                </h3>
                                <span className="qualification_subtitle">
                                    MySkill · Student
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> Jan 2023 - Feb 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    UI/UX Research And Design
                                </h3>
                                <span className="qualification_subtitle">
                                    Binar Academy · Student
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> Mar 2023 - Apr 2023
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
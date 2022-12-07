import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import Uiux from './Uiux'


function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">
                Skills
            </h2>
            <span className="section_subtitle">
                My Skills
            </span>

            <div className="skills_container container grip">
                <Frontend />
                <Backend />
                <Uiux />
            </div>
        </section>
    )
}

export default Skills
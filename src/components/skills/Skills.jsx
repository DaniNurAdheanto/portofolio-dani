import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'


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
            </div>
        </section>
    )
}

export default Skills
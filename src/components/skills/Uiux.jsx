import React from 'react'

const skillsData = [
    { name: 'Understanding & Planning', level: 'Intermediate' },
    { name: 'Ideation, User-Flow, IA, etc', level: 'Intermediate' },
    { name: 'Moodboard/Benchmarking', level: 'Intermediate' },
    { name: 'Wireframe & High-Fidelity Design', level: 'Intermediate' },
    { name: 'Design System & Prototype', level: 'Intermediate' },
    { name: 'Testing, Iteration & Hand-Off', level: 'Intermediate' },
]

function Uiux() {
    return (
        <div className="skills_content skills_content--product">
            <div className="skills_header">
                <i className="bx bxs-grid-alt skills_icon skills_icon--product"></i>
                <div>
                    <h3 className="skills_title">End-To-End Product</h3>
                    <p className="skills_description">From early ideas to production-ready designs, I support the full product design process.</p>
                </div>
            </div>

            <div className="skills_list">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skills_item">
                        <i className="bx bx-check-circle skills_check skills_check--product"></i>
                        <h4 className="skills_name">{skill.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Uiux
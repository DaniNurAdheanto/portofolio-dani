import React from 'react'

const skillsData = [
    { name: 'Understanding & Planning', level: 'Intermediate' },
    { name: 'Moodboard/Benchmarking', level: 'Intermediate' },
    { name: 'Wireframe/Low-Fidelity', level: 'Intermediate' },
    { name: 'High-Fidelity Design', level: 'Intermediate' },
    { name: 'Design System', level: 'Intermediate' },
    { name: 'Prototype & Hand-Off', level: 'Intermediate' },
]

function Backend() {
    return (
        <div className="skills_content skills_content--mobile">
            <div className="skills_header">
                <i className="bx bxs-folder skills_icon skills_icon--mobile"></i>
                <div>
                    <h3 className="skills_title">Mobile & Web App</h3>
                    <p className="skills_description">Creating UCD for web and mobile applications with a strong focus on usability and flow</p>
                </div>
            </div>

            <div className="skills_list">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skills_item">
                        <i className="bx bx-check-circle skills_check skills_check--mobile"></i>
                        <h4 className="skills_name">{skill.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Backend
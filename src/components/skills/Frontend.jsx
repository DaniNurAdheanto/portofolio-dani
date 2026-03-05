import React from 'react'

const skillsData = [
    { name: 'HTML', level: 'Intermediate' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'Bootstrap', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
    { name: 'React Js', level: 'Intermediate' },
]

function Frontend() {
    return (
        <div className="skills_content skills_content--website">
            <div className="skills_header">
                <i className="bx bxs-chat skills_icon skills_icon--website"></i>
                <div>
                    <h3 className="skills_title">Website Design</h3>
                    <p className="skills_description">Designing websites that clearly communicate value and guide users toward action</p>
                </div>
            </div>

            <div className="skills_list">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skills_item">
                        <i className="bx bx-check-circle skills_check skills_check--website"></i>
                        <h4 className="skills_name">{skill.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Frontend
import React from 'react'

function Backend() {
    return (
        <div className="skills_content">
            <h3 className="skills_title">Backend Developer</h3>

            <div className="skills_box">
                <div className="skills_groub">
                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills_name">PHP</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills_name">MySQL</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills_name">Laravel</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend
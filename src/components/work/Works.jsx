import React, { useEffect, useState } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import Workitems from './Workitems'

const Works = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        }
        else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        const clickedNav = projectsNav[index];
        setItem({ name: clickedNav.name });
        setActive(index);
    };
    
    return (
        <div>
            <div className="work_filters">
                {projectsNav.map((filterItem, index) => {
                    return (
                        <button
                            onClick={(e) => {
                                handleClick(e, index);
                            }}
                            className={`work_filter-btn ${active === index ? 'active-work' : ''}`}
                            key={index}
                        >
                            <i className={`${filterItem.icon}`}></i>
                            <span>{filterItem.label || filterItem.name}</span>
                        </button>
                    );
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <Workitems item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Works
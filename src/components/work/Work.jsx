import React from 'react'
import './work.css'
import Works from './Works'

const Work = () => {
    return (
        <div className="section work section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">Most Recent Works</span>

            <Works />
        </div>
    )
}

export default Work
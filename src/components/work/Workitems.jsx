import React from 'react'

const Workitems = ({ item }) => {
    return (
        <div className="work_card" key={item.id}>
            <img src={item.image} alt="" className='work_img' />
            <h3 className="work_title">{item.title}</h3>
            <a href={item.link} target="__blank" className="work_button">
                Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
            </a>
        </div>
    )
}

export default Workitems
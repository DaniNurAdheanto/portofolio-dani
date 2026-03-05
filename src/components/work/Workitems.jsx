import React from 'react'

const Workitems = ({ item }) => {
    const getCategoryLabel = (category) => {
        const categoryMap = {
            'ux-case-study': 'UX Case-Studies',
            'ui-design': 'UI/Visual Design',
            'others': 'Others Portfolio',
        };
        return categoryMap[category] || category;
    };

    const getCategoryColor = (category) => {
        const colorMap = {
            'ux-case-study': 'category-ux',
            'ui-design': 'category-ui',
            'others': 'category-others',
        };
        return colorMap[category] || '';
    };

    return (
        <div className="work_card">
            <div className="work_card-content">
                <div className="work_img-wrapper">
                    <img src={item.image} alt={item.title} className='work_img' />
                </div>
                <div className="work_info">
                    <div className={`work_category ${getCategoryColor(item.category)}`}>
                        {getCategoryLabel(item.category)}
                    </div>
                    <h3 className="work_title">{item.title}</h3>
                    <p className="work_description">{item.description}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="work_button">
                        View Case <i className="bx bx-right-arrow-alt work_button-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Workitems

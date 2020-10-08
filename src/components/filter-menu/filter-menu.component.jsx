import React, {useState} from 'react'

import './filter-menu.styles.scss'

const FilterMenu = ({ active, handleClick, onClick }) => {
    return (
        <div className = 'dropdown-filter-menu'>
            <div className = 'dropdown-filter-menu-btn' onClick = {handleClick}>
                <i className="fas fa-sort-amount-down"></i>
            </div>
            { active && 
            <ul className = 'dropdown-filter-menu-list'>
                {
                    FILTER_MENU_DATA.map((item, index) => (
                        <li onClick = {onClick} data-type = {item.type}>{item.text}</li>
                    ))
                }
            </ul>
            }  
        </div>
    )
}

const FILTER_MENU_DATA = [
    {
        type: 'todayCases',
        text: 'Most Cases Today'
    },
    {
        type: 'todayDeaths',
        text: 'Most Deaths Today'
    },
    {
        type: 'active',
        text: 'Most Active Today'
    },
    {
        type: 'critical',
        text: 'Most Critical Today'
    },
    {
        type: 'cases',
        text: 'Total Cases'
    },
    {
        type: 'deaths',
        text: 'Total Deaths'
    }
];

export default FilterMenu;
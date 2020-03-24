import React, {useState} from 'react'

import './filter-menu.styles.scss'

const FilterMenu = ({ filteredData, active, handleClick, onClick }) => {


    return (
        <div className = 'dropdown-filter-menu'>
            <div className = 'dropdown-filter-menu-btn' onClick = {handleClick}>
                <i class="fas fa-sort-amount-down"></i>
            </div>
            { active ? 
                <ul className = 'dropdown-filter-menu-list'>
                <li onClick = {onClick} data-type = 'todayCases'>Most Cases Today </li>
                <li onClick = {onClick} data-type = 'todayDeaths'>Most Deaths Today</li>
                <li onClick = {onClick} data-type = 'active'>Most Active Cases</li>
                <li onClick = {onClick} data-type = 'critical'>Most Critical Cases</li>
                <li onClick = {onClick} data-type = 'cases'>Total Cases</li>
                <li onClick = {onClick} data-type = 'deaths'>Total Deaths</li>
            </ul>
            : ''
            }
           
        </div>
    )
}

export default FilterMenu;
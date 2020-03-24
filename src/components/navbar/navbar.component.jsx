import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.styles.scss'

const Navbar = () => {
    return (
        <nav className = 'nav'>
            <ul className='nav-list'>
                <Link to ='/'>
                    <li className='nav-list-item'>
                        <i className='fas fa-chart-line'></i>Stats
                    </li>
                </Link>
                <Link to ='/'>
                    <li className='nav-list-item'>
                        <i className='far fa-newspaper'/>News
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
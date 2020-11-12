import React from 'react'

import './pagination.styles.scss'

const PaginationLink = ({handleClick, num, page}) => (
    <button onClick = {handleClick} data-page = {num} className = {page == num && 'active'}>
        {num}
    </button>
)

const Pagination = ({...rest}) => {
    let links = [];

    for(let i = 1; i <= 5; i++) {
        links.push(<PaginationLink num = {i} {...rest}/>)
    }

    return (
        <div className="pagination">
            {links}
        </div>
    )
}

export default Pagination;
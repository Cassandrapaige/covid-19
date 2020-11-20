import React from 'react'

import './pagination.styles.scss'

const PaginationLink = ({handleClick, num, page}) => (
    <button onClick = {handleClick} data-page = {num} className = {page == num && 'active'}>
        {num}
    </button>
)

const Pagination = ({totalPages, ...rest}) => {
    let links = [];

    for(let i = 1; i <= totalPages; i++) {
        links.push(<PaginationLink key = {i} num = {i} {...rest}/>)
    }

    return (
        <div className="pagination">
            {totalPages <= 5 ? links : links.slice(0, 5)}
        </div>
    )
}

export default Pagination;
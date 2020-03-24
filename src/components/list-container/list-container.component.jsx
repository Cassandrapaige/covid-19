import React from 'react'

import './list-container.styles.scss'

const ListContainer = ({children}) => {
    return (
        <div className = 'data-list-item'>
            {children}
        </div>
    )
}

export default ListContainer;

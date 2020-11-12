import React from 'react'

import './list-item.styles.scss'

const ListItem = ({children}) => {
    return (
        <article className = 'list-item'>
            {children}
        </article>
    )
}

export default ListItem;

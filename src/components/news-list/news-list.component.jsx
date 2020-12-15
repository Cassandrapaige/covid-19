import React, {Fragment} from 'react'

import './news-list.styles.scss'

import ListItem from '../list-item/list-item.component'

const NewsList = ({ data }) => {    
    return (
    <Fragment>
        {data.map((data, index) => 
            <ListItem key = {index}>
                <a href ={data.webUrl} 
                    target='_blank' 
                    rel="noopener noreferrer"> 
                    <h2 className = 'list-item-title'>{data.webTitle}</h2>
                    <span className = 'list-item-tag'>{data.sectionName}</span>
                    <p className = 'list-item-substring'>{data.fields.bodyText.substr(0, 200)}...</p>
                </a>
            </ListItem> 
        )}
    </Fragment>
    )
}

export default NewsList;

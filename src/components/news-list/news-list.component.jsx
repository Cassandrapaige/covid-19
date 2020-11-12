import React, {Fragment, useState, useEffect} from 'react'

import './news-list.styles.scss'

import ListContainer from '../list-container/list-container.component'

const NewsList = ({ data }) => {    
    return (
    <Fragment>
        {data.map((data, index) => 
            <ListContainer>
                <div className="article" key = {index}>
                    <a href ={data.webUrl} 
                        target='_blank' 
                        rel="noopener noreferrer"> 
                        <h3>{data.webTitle}</h3>
                        <span>{data.sectionName}</span>
                        <p>{data.fields.bodyText.substr(0, 200)}...</p>
                    </a>
                </div>
            </ListContainer> 
        )}
    </Fragment>
    )
}

export default NewsList;

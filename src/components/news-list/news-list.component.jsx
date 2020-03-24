import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'

import ListContainer from '../list-container/list-container.component'
import './news-list.styles.scss'

const NewsList = ({ data }) => {
    const [ width, getWidth ] = useState(window.innerWidth)
  
      
    const getWindowWidth = () => {
        getWidth(window.innerWidth);
    }
    window.addEventListener('resize', getWindowWidth);

    return (
    <Fragment>
        {data.map(data => 
        <a href ={data.url} target='_blank'>
            <ListContainer>
            <div className="article">
                <div className="content">
                    <h2>{data.title}</h2>
                    { width >= 1200 ? 
                        <p>{data.description}</p>
                        : ''
                    }
                </div>
             <img src={data.urlToImage} alt=""/>
            </div>
        </ListContainer> 
        </a>
           
            )}
    </Fragment>
    )
}

export default NewsList;

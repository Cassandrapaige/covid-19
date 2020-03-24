import React, {Fragment, useState, useEffect} from 'react'

import './news-list.styles.scss'

import ListContainer from '../list-container/list-container.component'

const NewsList = ({ data }) => {
    const [ width, getWidth ] = useState(window.innerWidth)
  
    useEffect(() => {
        window >= 1200 ?
            window.removeEventListener('resize', getWindowWidth)
            : window.addEventListener('resize', getWindowWidth)
    },[]);

    const getWindowWidth = () => {
        getWidth(window.innerWidth);
    }
    
    return (
    <Fragment>
        {data.map((data, index) => 
        <a 
            href ={data.url} 
            target='_blank' 
            rel="noopener noreferrer" 
            key = {index}>
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

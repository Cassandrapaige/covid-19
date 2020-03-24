import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './news-page.styles.scss'
import {API_KEY} from '../../base'

import NewsList from '../../components/news-list/news-list.component'
import Container from '../../components/container/container.component'
import Spinner from '../../components/spinner/spinner.component'

const NewsPage = () => {
    const [count, setCount] = useState(20);
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState(
    `https://newsapi.org/v2/everything?q=covid&from=2020-03-24&sortBy=popularity&language=en&pageSize=${count}&apiKey=${API_KEY}`);
    const [data, setData] = useState([]);
  
    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
        .then(result => {
            setData(result.data.articles)
            setIsLoading(false)
            })
        .catch(error => console.log(error))
    }, [url]);

    
    const handleClick = () => {
        setCount(count + 20)
        setUrl(`https://newsapi.org/v2/everything?q=covid&from=2020-03-24&sortBy=popularity&language=en&pageSize=${count + 20}&apiKey=${API_KEY}`);
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Container>
            <h2 className = 'title'>Latest News | Top 100</h2>
            { isLoading ? 
                <Spinner /> 
                :

                <NewsList data = {data} />
            }
                <button onClick = { count <= 80 ? handleClick : scrollToTop}> 
                    { count <= 80 ? 'See more' : 'Go to top' }
                </button>

        </Container>
    )
}

export default NewsPage;

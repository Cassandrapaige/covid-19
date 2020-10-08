import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'

import './news-page.styles.scss'
import {API_KEY} from '../../base'

import NewsList from '../../components/news-list/news-list.component'
import Container from '../../components/container/container.component'
import Spinner from '../../components/spinner/spinner.component'

const NewsPage = () => {
    const [count, setCount] = useState(20);
    const [isLoading, setIsLoading] = useState(false);

    // GET TODAYS DATE (MINUS ONE WEEK) FOR RELEVANT API DATA
    let today = new Date();
    const dd = String(today.getDate() - 7).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    const [url, setUrl] = useState(`https://newsapi.org/v2/everything?q=covid&from=${today}&sortBy=relevance&language=en`);
    const [data, setData] = useState([]);
  
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${url}&pageSize=${count}&apiKey=${API_KEY}`)
        .then(result => {
            setData(result.data.articles)
            setIsLoading(false)
            })
        .catch(error => console.log(error))
    }, [count]);

    const handleClick = () => {
        setCount(count + 20)
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
                <Fragment>
                    <NewsList data = {data} />
                    <button onClick = { count <= 80 ? handleClick : scrollToTop}> 
                        { count <= 80 ? 'See more' : 'Go to top' }
                    </button>
                </Fragment>
            }
        </Container>
    )
}

export default NewsPage;

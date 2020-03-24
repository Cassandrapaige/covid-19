import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './news-page.styles.scss'

import NewsList from '../../components/news-list/news-list.component'
import Container from '../../components/container/container.component'

const NewsPage = () => {
    const [count, setCount] = useState(20);
    const [url, setUrl] = useState(
    `http://newsapi.org/v2/everything?q=covid&from=2020-03-24&sortBy=popularity&language=en&pageSize=${count}&apiKey=4792a2b1fc8446f094c1d461b6330502`);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get(url)
      .then(result => {setData(result.data.articles)})
      .catch(error => console.log(error))
    }, [url]);

    const handleClick = () => {
        setCount(count + 20)
        setUrl(`http://newsapi.org/v2/everything?q=covid&from=2020-03-24&sortBy=popularity&language=en&pageSize=${count + 20}&apiKey=4792a2b1fc8446f094c1d461b6330502`);
        console.log(count)
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Container>
            <h2 className = 'title'>Latest News | Top 100</h2>
            <NewsList data = {data} />
                <button onClick = { count <= 80 ? handleClick : scrollToTop}> 
                    { count <= 80 ? 'See more' : 'Go to top' }
                </button>
        </Container>
    )
}

export default NewsPage;

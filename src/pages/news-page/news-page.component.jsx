import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './news-page.styles.scss'
import {API_KEY} from '../../base'
import api from '../../api/guardian'

import NewsList from '../../components/news-list/news-list.component'
import Container from '../../components/container/container.component'
import Spinner from '../../components/spinner/spinner.component'
import Pagination from '../../components/pagination/pagination.component';

const NewsPage = () => {
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    // GET TODAYS DATE (MINUS ONE WEEK) FOR RELEVANT API DATA
    let today = new Date();
    const dd = String(today.getDate() - 7).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    const handleClick = event => { 
        setPage(event.target.dataset.page);
    }

    const fetchResults = async (url) => {
        const response = await api.get(url);
        const result = await response.data.response
        setData(result.results);
        setTotalPages(result.pages);
        setTotalResults(result.total);
        setIsLoading(false);
    }
    
    useEffect(() => {
        setIsLoading(true);
        window.scrollTo(0, 0);
        fetchResults(`search?q=covid&page=${page}&page-size=20&from-date=${today}&show-fields=bodyText&api-key=${API_KEY}`)
        .catch(error => console.log(error));
    }, [page, today]);

    const renderPageWithSpinner = Component => (
       !isLoading && data.length > 0 ? <Component /> : <Spinner/>
    )

    return (
            renderPageWithSpinner(() => (
                <Container>
                    <h2 className = 'title'>Latest News | Top {totalResults <= 100 ? totalResults : 100}</h2>
                    <NewsList data = {data} />
                    <Pagination handleClick = {handleClick} page = {page} totalPages = {totalPages}/>
                </Container>
           ))
    )
}

export default NewsPage;

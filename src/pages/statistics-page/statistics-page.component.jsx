import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './statistics-page.styles.scss'
import DataList from '../../components/data-list/data-list.component'
import SearchFeature from '../../components/search-feature/search-feature.component'

const StatisticsPage = () => {
    const [url, setUrl] = useState('https://coronavirus-19-api.herokuapp.com/countries');
    const [data, setData] = useState([]);
    const [searchField, setSearchField] = useState('');
  
    useEffect(() => {
      axios.get(url)
      .then(result => {setData(result.data)})
      .catch(error => console.log(error))
    }, []);

    const filteredData = data.filter(el => 
        el.country.toLowerCase().includes(searchField.toLowerCase())
    )

    const handleChange = event => {
        setSearchField(event.target.value)
      }

    return (
        <div className = 'data-container'>
            <SearchFeature placeholder = '&#xF002; Search by country' handleChange = {handleChange} />
            <DataList filteredData = {filteredData} />
        </div>
    )
}

export default StatisticsPage;

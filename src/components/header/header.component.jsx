import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './header.styles.scss'

const Header = () => {
    const [url, setUrl] = useState('https://coronavirus-19-api.herokuapp.com/countries');
    const [data, setData] = useState([]);
    const [searchField, setSearchField] = useState('');
  
    useEffect(() => {
      axios.get(url)
      .then(result => {setData(result.data)})
      .catch(error => console.log(error))
    }, []);
  
    const calculateTotalResults = (array) => {
      const results = array.reduce((total, num) => total + num, 0);
      return results.toLocaleString();
    }
  
      // CALCULATE TOTAL DEATHS TODAY
      const deathsToday = data.map(el => el.todayDeaths);
      const totalDeathsToday = calculateTotalResults(deathsToday);
  
      // CALCULATE TOTAL DEATHS
      const deaths = data.map(el => el.deaths);
      const totalDeaths = calculateTotalResults(deaths);

    return (
        <header>
            <h1>Covid-19</h1>
            <h3>Total deaths: <span>{totalDeaths}</span>   |   Today: <span>{totalDeathsToday}</span></h3>
        </header>
    )
}

export default Header;
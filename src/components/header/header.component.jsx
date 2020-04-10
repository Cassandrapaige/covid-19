import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

import './header.styles.scss'

const Header = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get('https://coronavirus-19-api.herokuapp.com/countries')
      .then(result => {setData(result.data)})
      .catch(error => console.log(error))
    }, []);

    const worldData = data.filter(e => e.country === "World");
    const totalDeaths = worldData.map(x => x.deaths).toLocaleString();
    const todayDeaths = worldData.map(x => x.todayDeaths).toLocaleString();

    return (
        <header>
            <Link to = '/'><h1>Covid-19</h1></Link>
            <h3>Total deaths: <span> {totalDeaths}</span>   |   
            Today: <span> {todayDeaths} </span></h3>
        </header>
    )
}

export default Header;
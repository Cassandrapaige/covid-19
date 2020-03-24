import React, { useState, useEffect } from 'react';
import axios from 'axios'

import DataList from '../../components/data-list/data-list.component'
import SearchFeature from '../../components/search-feature/search-feature.component'
import Container from '../../components/container/container.component'
import FilterMenu from '../../components/filter-menu/filter-menu.component'
import Spinner from '../../components/spinner/spinner.component'

const StatisticsPage = () => {
    const [data, setData] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        setIsLoading(true);
      axios.get('https://coronavirus-19-api.herokuapp.com/countries')
      .then(result => {
          setData(result.data);
          setIsLoading(false);
        })
      .catch(error => console.log(error))
    }, []);

    const filteredData = data.filter(el => 
        el.country.toLowerCase().includes(searchField.toLowerCase())
    )

    const handleChange = event => {
        setSearchField(event.target.value)
    }

    const handleClick = () => {
        setIsActive(!isActive);
    }

    const sortByType = (field, primer) => {
        const key = primer ? (x) => primer(x[field]) : (x) =>  x[field];
        return (a, b) => {
            return a = key(a), b = key(b),  primer(b) - primer(a);
        }
    }

    const filteredList = event => {
        let type = event.target.dataset.type;
        setData(filteredData.sort(sortByType(`${type}`, parseInt)))
        setIsActive(!isActive);
    }

    return (
        <Container> 
            <SearchFeature placeholder = '&#xF002; Search by country' handleChange = {handleChange}>
                <FilterMenu 
                    filteredData = {filteredData} 
                    active = {isActive}
                    handleClick = {handleClick}
                    onClick = {filteredList}
                />
            </SearchFeature>
            {isLoading ?
                <Spinner />
                :
                <DataList filteredData = {filteredData} />
            }
        </Container>
    )
}

export default StatisticsPage;

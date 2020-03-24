import React from 'react'

import './search-feature.styles.scss'

const SearchFeature = ({placeholder, handleChange}) => {
    return (
         <div className="search-feature">
            <input type="text" onChange = {handleChange} placeholder = {placeholder}/>
        </div>
    )
}

export default SearchFeature;

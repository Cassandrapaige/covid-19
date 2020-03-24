import React from 'react'

import './search-feature.styles.scss'

const SearchFeature = ({placeholder, handleChange, children}) => {
    return (
         <div className="search-feature">
            <input type="text" onChange = {handleChange} placeholder = {placeholder}/>
            {children}
        </div>
    )
}

export default SearchFeature;

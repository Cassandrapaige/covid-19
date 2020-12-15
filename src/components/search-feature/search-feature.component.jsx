import React from 'react'

import './search-feature.styles.scss'

const SearchFeature = ({placeholder, handleChange, children, inputRef}) => {
    return (
         <div className="search-feature">
            <input 
                type="text" 
                onChange = {handleChange} 
                placeholder = {placeholder}
                ref = {inputRef}
            />
            {children}
        </div>
    )
}

export default SearchFeature;

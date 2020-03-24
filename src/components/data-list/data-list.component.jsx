import React, {Fragment} from 'react'

import './data-list.styles.scss'

const DataList = ({ filteredData }) => {
    return (
    <Fragment>
        {filteredData.map(data => 
        <div className = 'data-list-item'>
              <h2>{data.country.toUpperCase()}</h2>
              <div className = 'data'>
                <h3>Todays Cases: <span>{data.todayCases.toLocaleString()} |</span> </h3>
                <h3>Deaths: <span>{data.todayDeaths.toLocaleString()}</span></h3>
              </div>
              <div className = 'data'>
                <h3>Active Cases: <span>{data.active.toLocaleString()} |</span> </h3>
                <h3>Critical: <span>{data.critical.toLocaleString()}</span></h3>
              </div>
              <div className = 'data'>
                <h3>Total Cases: <span>{data.cases.toLocaleString()} |</span></h3> 
                <h3>Deaths: <span>{data.deaths.toLocaleString()}</span></h3>
              </div>
        </div>            
            )}
    </Fragment>
    )
}

export default DataList;

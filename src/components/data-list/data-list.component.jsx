import React, {Fragment} from 'react'

import './data-list.styles.scss'

import ListContainer from '../list-container/list-container.component'

const DataList = ({ filteredData }) => {

    return (
    <Fragment>
        {filteredData.map((data, index) => {
          const getData = keyword => {
            if(data !== null) {
              try {
                return data[keyword].toLocaleString()
              }
              catch (error) {
                console.log(error)
              }
            }
          }

          return (
          <ListContainer key = {index}>
            <h2>{data.country.toUpperCase()}</h2>
              <div className = 'data'>
                <p>Todays Cases: <span>{getData('todayCases')} |</span> </p>
                <p>Deaths: <span>{getData('todayDeaths')}</span></p>
              </div>
              <div className = 'data'>
                <p>Active Cases: <span>{getData('active')} |</span> </p>
                <p>Critical: <span>{getData('critical')}</span></p>
              </div>
              <div className = 'data'>
                <p>Total Cases: <span>{getData('cases')} |</span></p> 
                <p>Deaths: <span>{getData('deaths')}</span></p>
              </div>
          </ListContainer>    
          )
        }        
      )}
    </Fragment>
    )
}

export default DataList;

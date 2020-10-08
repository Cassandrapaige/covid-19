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
                <h3>Todays Cases: <span>{getData('todayCases')} |</span> </h3>
                <h3>Deaths: <span>{getData('todayDeaths')}</span></h3>
              </div>
              <div className = 'data'>
                <h3>Active Cases: <span>{getData('active')} |</span> </h3>
                <h3>Critical: <span>{getData('critical')}</span></h3>
              </div>
              <div className = 'data'>
                <h3>Total Cases: <span>{getData('cases')} |</span></h3> 
                <h3>Deaths: <span>{getData('deaths')}</span></h3>
              </div>
          </ListContainer>    
          )
        }        
      )}
    </Fragment>
    )
}

export default DataList;

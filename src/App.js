import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

/*COMPONENTS */
import Navbar from './components/navbar/navbar.component'
import Header from './components/header/header.component'
import StatisticsPage from './pages/statistics-page/statistics-page.component'

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path = '/' component = {StatisticsPage} />
        </Switch>
      <Navbar />
    </div>
  );
}

export default App;

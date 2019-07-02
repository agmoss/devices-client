import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";

import NavBar from '../NavBar';
import LineChart from '../../containers/LineChart';
import ChartPanel from '../../containers/ChartPanel';
import DataPanel from '../../containers/DataPanel';
import Table from '../DataTable'

function App() {
  return (

    <div className="App">
      <NavBar title="Fleet Dashboard"/>

       <div className="container">
        <div className="row justify-content-center">
          <ChartPanel title = "Line">
            <select id = "selectStatus"></select>
            <div id = "lineDiv"/>
            <LineChart/>
          </ChartPanel>
        </div>

        <div className="row">
          <DataPanel title = "Data">
            <Table/>
          </DataPanel>
        </div>
      </div> 

    </div>
  );
}

export default App;

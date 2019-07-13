import React, {Component, Fragment} from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";

//Containers
import LineChart from '../../containers/LineChart';
import DataSquare from '../../containers/DataTable';

// Components
import NavBar from '../NavBar';
import ChartPanel from '../ChartPanel';
import DataPanel from '../DataPanel';
import withSplashScreen from '../withSplashScreen';

class App extends Component {

  render() {
    
    return (

      <Fragment>

      <div className="App">
        <NavBar title="Fleet Dashboard"/>

        <div className="container">
          <div className="row justify-content-center">
            <ChartPanel title = "Time Series">
              <select id = "selectStatus"></select>
              <div id = "lineDiv"/>
              <LineChart {...this.props}/>
            </ChartPanel>
          </div>
 
          <div className="row">
            <DataPanel title = "Recent Entries">
              <DataSquare {...this.props}/>
            </DataPanel>
          </div>
        </div> 

      </div>

      </Fragment>
    );
  }
}

export default withSplashScreen(App);

import React,{Component} from 'react';
import D3line from '../../components/D3line';

import timeSeries from '../../functions/TimeSeries'

class LineChart extends Component{
    
      componentDidMount(){

        const self = this;
    
        fetch('https://devicesapi.azurewebsites.net/signal/all')
        .then(resp=> resp.json())
        .then(json =>self.setState({data:timeSeries(json)}))
    
      }

    render(){
        return (
            
            <div>
                {/* Async render */}
                { this.state && this.state.data &&
                 <div><D3line data= {this.state.data} /> </div>
                }
            </div>
        ) 
    }
}

export default LineChart;
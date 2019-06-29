import React,{Component} from 'react';
import D3line from '../../components/D3line';

class LineChart extends Component{

    timeSeries(data1){

        var map = {}; data1.forEach(function(val){
            map[val.entry_date] = map[val.entry_date] || {};
            map[val.entry_date][val.status] = map[val.entry_date][val.status] || 0;
            map[val.entry_date][val.status]++;
          });
    
        var data2 = Object.keys(map).map(function(key){
            var tmpArr = [];
            var dict = {};
            for(var status in map[key])
            {
                tmpArr.push({key:status,value:map[key][status]})
                dict[status] = map[key][status];
            }
            return {date : new Date(key), status: dict};
        })
    
        return data2;
    }

    
      componentDidMount(){

        const self = this;
    
        fetch('/signal/all')
        .then(resp=> resp.json())
        .then(json =>self.setState({data:this.timeSeries(json)}))
    
      }

    render(){
        return (
            
            <div>
                {/* Async render */}
                { this.state && this.state.data &&
                 <div><D3line data= {this.state.data} />  </div>
                }
            </div>
        ) 
    }
}

export default LineChart;
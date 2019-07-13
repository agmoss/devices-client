import React,{Component} from 'react';
import BstrapTable from '../../components/BstrapTable';
import sortDate from '../../functions/SortDate'

class DataSquare extends Component{
    
      componentDidMount(){
        const self = this;
        self.setState({data:sortDate(this.props.data)})
      }

    render(){
        return (
            
            <div>
                {/* Async render */}
                { this.state && this.state.data &&
                 <div><BstrapTable data= {this.state.data} /> </div>
                } 
            </div>
        ) 
    }
}

export default DataSquare;
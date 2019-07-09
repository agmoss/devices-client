import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import React,{Component} from 'react';

class Table extends Component {

    state = {
        data: [],
        columns: [{
            dataField: 'key',
            text: 'key'
          },
          {
            dataField: 'entry_date',
            text: 'Entry Date',
            sort: true
          }, {
            dataField: 'AssetUN',
            text: 'AssetUN',
            sort: true
          },{
            dataField: 'status',
            text: 'Status',
            sort: true
          }]
    }

    sortDate(arry){
      arry.sort(function(a,b){
        return new Date(b.entry_date) - new Date(a.entry_date);
      });

      // Display top 10 elements
      return arry.slice(Math.max(arry.length - 10, 1))
    }

    componentDidMount(){

        const self = this;
    
        fetch('https://devicesapi.azurewebsites.net/signal/all')
        .then(resp=> resp.json())
        .then(json =>self.setState({data:this.sortDate(json)}))
      }

    render() {
        return (

            <div>
                {this.state && this.state.data &&
                <BootstrapTable 
                striped
                hover
                keyField='id' 
                data={ this.state.data } 
                columns={ this.state.columns } />
                }
            </div>
            
        );
      }
    
    }
export default Table

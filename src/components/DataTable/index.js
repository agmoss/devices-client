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
            text: 'Entry Date'
          }, {
            dataField: 'AssetUN',
            text: 'AssetUN',
            sort: true
          },{
            dataField: 'status',
            text: 'Status'
          }]
    }

    componentDidMount(){

        const self = this;
    
        fetch('/signal/all')
        .then(resp=> resp.json())
        .then(json =>self.setState({data:json}))
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

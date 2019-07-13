import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import React,{Component} from 'react';

class BstrapTable extends Component {

    state = {
        data: this.props.data,
        columns: [
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

export default BstrapTable;

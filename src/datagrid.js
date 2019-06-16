import React, {Component} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class DataGrid extends Component {
  
  constructor(props) {
    super(props);
    
    const myobj = props;
    //console.log(props);
    this.state = {
      myobj,
      rowData: [],
      columnDefs: [
        {headerName: "ID", field: "id", width: 40, sortable: true},
        {headerName: "Timestamp", field: "timestamp", width: 170, sortable: true},
        {headerName: "App", field: "platform.app", width: 50,},
        {headerName: "Device", field: "platform.device", width: 80, },
        {headerName: "Latitude", field: "location.lat", width: 80, },
        {headerName: "Evaluation", field: "eval", width: 220, editable: true, cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['approved', 'rejected because of photos', 'rejected because of classifications', 'rejected because of location', 'rejected']
        }},
        
      ]
    }
    
      // const keys = Object.keys(myobj);
      // const values = Object.values(myobj);
      // const entries = Object.entries(myobj)
      // entries.forEach ((e) => {
        // console.log(e[1].platform);
      // })
    
    // const entries = Object.entries(myobj);
    // entries.forEach ((e) => {
    //   console.log(e[1]);
    //   this.setState({columnDefs: [{ headerName: e[1] }]}); // console.log(e[1].platform);
    //   console.log(this.state.columnDefs);
    // });
    
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/jpfmg')
      .then(result => result.json())
      .then(rowData => this.setState({rowData}))
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged() {
    var selectedRows = this.gridApi.getSelectedRows();
    var selectedRowsString0 = "";
    var selectedRowsString1 = "";
    selectedRows.forEach(function(selectedRow, index) {
      //if (index !== 0) {
        //selectedRowsString += ", ";
      //}
      selectedRowsString0 = selectedRow.photos[0].url;
      selectedRowsString1 = selectedRow.photos[1].url;
    });
    document.getElementById("pic0").src = selectedRowsString0;
    document.getElementById("pic1").src = selectedRowsString1;
  }
   
    render() {

      return (
          <div>
            <div id="selectedRows" style={{float: "right"}}>
              <img id="pic0" alt="" height="250px" width="250px"></img>  
              <img id="pic1" alt="" height="250px" width="250px"></img>  
            </div>            
            <div 
              className="ag-theme-balham"
              style={{height: '500px', width: '700px', float: "clear" }} >
              <AgGridReact rowData={this.state.rowData} columnDefs={this.state.columnDefs} rowSelection="single"
                onGridReady={this.onGridReady}
                onSelectionChanged={this.onSelectionChanged.bind(this)}>
                  </AgGridReact>
              
            </div>
          </div>
      );
   
  }
}
export default DataGrid;

// if (Object.entries(this.state.myobj).length === 0 && this.state.myobj.constructor === Object) {
//   return (
//     <div>Loading...</div>
//   ) 
// } else {

                
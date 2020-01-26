import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Save from './saveCellRenderer.js'
import Drop from './dropDownRenderer';
import Drop2 from './dropDownRenderer2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'state',
      columnDefs: [{
        headerName: "Make", field: "make", editable: true
      }, {
        headerName: "Model", field: "model"
      }, {
        headerName: "Price", field: "price"
      },
      {
        headerName: "Save",
        cellRendererFramework: Save
      },
      {
        headerName: "Opt 1",
        cellRendererFramework: Drop,
        field: "1"
      },
      {
        headerName: "Opt 2",
        cellRendererFramework: Drop2,
        field: "2"
      },
      {
        headerName: "Result",
        field: "res"
      }],
      rowData: [{
        make: "Toyota", model: "Celica", price: 35000, opt1: ["opt1", "opt2", "opt3"], opt2: ["opt1", "opt2", "opt3"], res: "Select"
      }, {
        make: "Ford", model: "Mondeo", price: 32000, opt1: ["opt1", "opt2", "opt3"], opt2: ["opt1", "opt2", "opt3"], res: "Select"
      }, {
        make: "Porsche", model: "Boxter", price: 72000, opt1: ["opt1", "opt2", "opt3"], opt2: ["opt1", "opt2", "opt3"], res: "Select"
      }]
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState(
      {
        title: 'state changed'
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Welcome to this {this.state.title} example</h1>
        <button onClick={this.updateState}>Click Me</button>
        <div
        className="ag-theme-balham"
        style={{
        height: '500px',
        width: '600px' }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
      </div>
    
    );
  }
}

export default App;
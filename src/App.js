import React, {Component} from 'react';
import './App.css';
import DataGrid from './datagrid';

class App extends Component {
  state = {
    items: []
  }

  constructor(props) {
      super(props);

      this.state = {
        showGrid: false
      }

      // axios.get(`https://api.myjson.com/bins/jpfmg`)
      //     .then(res => {
      //       const items = res.data;
      //       this.setState({ items, showGrid: true });
      // })
  }

  render() {
    return (
      <div>
        <DataGrid {...this.state.items} />         
      
      </div>
    )
  }
}

export default App;

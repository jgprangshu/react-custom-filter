

import React, { Component } from 'react'
import Display from './display';
import Search from './search';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filterText: ''
    }
  }

  filterUpdate = (value) =>{
    console.log(value);
    this.setState({
      filterText : value
     
    })
  }


  
  render() {
    
    return (
      <React.Fragment>
        <Search filterUpdate= {this.filterUpdate} filterText={this.state.filterText}/>
        <Display filterText={this.state.filterText}/>
      </React.Fragment>
    )
  }
}


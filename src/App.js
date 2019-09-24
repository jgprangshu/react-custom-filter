

import React, { Component } from 'react'
import Display from './display';
import Search from './search';
import GoogleAuth from './googleAuth';

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
        <GoogleAuth/>
      </React.Fragment>
    )
  }
}


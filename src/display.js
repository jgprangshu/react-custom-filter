import React, { Component } from 'react'
import {data} from './data'

export default class Display extends Component {
    render() {
           const displayData= data
           .filter(dataItems=>{
               return(
                   dataItems.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0
               )
           })
           .map(dataItems=>{
                return(
                    <li key={dataItems.id}>{dataItems.name}</li>
                )
            })

        return (
            <div>
                <ul>{displayData}</ul>
            </div>
        )
    }
}

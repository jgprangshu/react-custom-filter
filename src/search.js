import React, { Component } from 'react'

export default class Search extends Component {

handleChange = (event) =>{
    const val = event.target.value
    this.props.filterUpdate(val)
}

    render() {
        return (
            <div>
                <form>
                    <input type="text"
                    placeholder="Search Name"
                    value={this.props.filterText}
                    onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

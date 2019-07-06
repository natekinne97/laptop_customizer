import React, { Component } from 'react';

// get list of keys to display. i.e display, OS
// Option cost in the summary bar
export default class Summary extends Component{
  
    render(){
       const summary = Object.keys(this.props.selected)
            .map(key => <div className="summary__option" key={key}>
                {console.log(this.props)}
                <div className="summary__option__label">{key}  </div>
                <div className="summary__option__value">{this.props.selected[key].name}</div>
                <div className="summary__option__cost">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        .format(this.props.selected[key].cost)}
                </div>
            </div>)
            console.log(this.props);
        return summary;
    }
}
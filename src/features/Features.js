import React, { Component } from 'react';
import Options from '../Options/Options';

export default class Features extends Component{
    // Remember to pass the onclick function from App.js into features and options
    render(){
        // the main store is passed in using features
        // this is rendered in the main 
        const features = Object.keys(this.props.features)
            .map(key => {
                console.log(key);
                // for each section of 
                // wrapping the buttons and li inside a div and ul and return the whole unit
                return <div className="feature" key={key}>
                    <div className="feature__name">{key}</div>
                    <ul className="feature__list">
                        <Options keys={key} 
                        features={this.props.features} 
                        selected={this.props.selected}
                        updateFeature={this.props.updateFeature}/>
                    </ul>
                </div>
            });  
            return features;
    }
}
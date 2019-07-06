import React, { Component } from 'react';

export default class Options extends Component {

    // pass this function into the other component
    // Update feature. When clicked on updates the selected feature by
    // highlighting it and adding it to the cart
    // updateFeature(feature, newValue) {
    //     console.log("working", this.props.state.selected);
    //     // add user clicked item to the selected array
    //     //                        target    source
    //     const selected = Object.assign({}, this.props.state.selected);
    //     // based on the clicked item the data is switched out display: new value
    //     selected[feature] = newValue;
    //     // update the state.selected 
    //     this.props.setState({
    //         selected
    //     });
    // }

    render(){
        // break apart the store into seperate items. each key and its items
        const options = this.props.features[this.props.keys].map((item, index) => {
            // find selected classes
            const selectedClass = item.name === this.props.selected[this.props.keys].name ? 'feature__selected' : '';
            // add feature option selected to the summary bar
            const featureClass = 'feature__option ' + selectedClass;
            //  check which item is clicked and change the styling
            return <li key={index} className="feature__item">
                <div className={featureClass}
                    // if clicked add to summary bar
                    onClick={e => this.props.updateFeature(this.props.keys, item)}>
                    {item.name}
                    ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        .format(item.cost)})
                </div>
            </li>
        });
        return options;
    }
}
import React, { Component } from 'react';

export default class Total extends Component{

    render(){
        return(
            <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                    {/* add style and format the cost */}
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        .format(this.props.total)}
                </div>
            </div>
        );
    }
}
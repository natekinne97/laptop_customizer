import React, { Component } from 'react';
import Header from './header/Header';
import Summary from './summary/Summary';
import Features from './features/Features';
import Total from './totalSummary/total';
import defaultDB from './Stores/defaultDB';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: defaultDB.selected
    }
    this.updateFeature = this.updateFeature.bind(this);
  }

  updateFeature(feature, newValue) {
    // add user clicked item to the selected array
    //                        target    source
    const selected = Object.assign({}, this.state.selected);
    // based on the clicked item the data is switched out display: new value
    selected[feature] = newValue;
    // update the state.selected 
    this.setState({
      selected
    });
  }

  render() {

    // Add all of the costs togeter for total in summary bar
    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);              

    return (
      <div className="App">
            <Header/>
        <main>
          <section className="main__form">
            {/* main section rendering the features */}
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Features
              features={this.props.features}
              selected={defaultDB.selected}
              updateFeature={this.updateFeature}
            />
          </section>
          <section className="main__summary">
            {/* create the summary bar and populate it */}
            <h3>NEW GREENLEAF 2018</h3>

              <Summary selected={this.state.selected}/>
              <Total total={total}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;  

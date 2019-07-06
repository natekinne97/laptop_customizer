import React from 'react';
import ReactDOM from 'react-dom';
import FEATURES from './Stores/secondaryDB';
import './index.css';
import App from './App';
// store

// render. Pass the features list to the app.js
ReactDOM.render(<App features={FEATURES}/>, document.getElementById('root'));

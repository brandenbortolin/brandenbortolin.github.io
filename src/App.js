import React, { Component } from 'react';
import './App.css';
import Education from './education/Education.js';
import Experience from './experience/Experience.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <h2>Coming Soon! </h2>
          <Experience />
          <br/>
          <Education />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

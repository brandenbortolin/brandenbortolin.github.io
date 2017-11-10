import React, { Component } from 'react';
import './Experience.css';
import Divider from 'material-ui/Divider';

class Experience extends Component {
  render() {
    return (
      <div className='experience'>
        <Divider />
        <u><h2>EXPERIENCE</h2></u>

          <h3 style={{position: 'left', display: 'inline'}}>CENX - Junior Software Developer</h3>
          <h3 style={{position: 'right', display: 'inline'}}>February 2016 - Present </h3>

      </div>
    );
  }
}

export default Experience;

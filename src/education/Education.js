import React, { Component } from 'react';
import './Education.css';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Education extends Component {
  render() {
    return (
      <div className='education'>
        <Divider />
        <u><h2>EDUCATION</h2></u>
        <h3>Bachelors of Computer Science - Minor in Mathematics</h3>
        <h3>Carleton University 2011-2015</h3>
      </div>
    );
  }
}

export default Education;

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import Body from './body/Body';
import './css/styles.css';

ReactDOM.render(
  <Router>
    <Body />
  </Router>,
  document.querySelector('#root')
);

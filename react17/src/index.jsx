// import React from 'react'
// import { render } from 'react-dom'
// import DemoApp from './DemoApp'
// import './index.css'

const React = require('react');
const { render } = require('react-dom');
const DemoApp = require('./DemoApp');
require('./index.css');

document.addEventListener('DOMContentLoaded', function () {
  render(<DemoApp />, document.body.appendChild(document.createElement('div')));
});

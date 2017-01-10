import ReactDOM from 'react-dom';
//var ReactDOM = require('react-dom');
import React from 'react';
// var React = require('react');
import NotesApp from './components/NotesApp.jsx';
// var NotesApp = require('./components/NotesApp.jsx');
import Button from 'react-bootstrap';

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
);
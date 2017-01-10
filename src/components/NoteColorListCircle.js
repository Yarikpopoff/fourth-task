import React from 'react';

require('./style.css');

//var NoteColorListCircle = React.createClass({
export default class NoteColorListCircle extends React.Component {

    render() {
        return ( 
        	<div className="color-circles"
            	style = {{ backgroundColor: this.props.color }}>
            	{ this.props.text } 
            </div>
        );
    }
};

// module.exports = NoteColorListCircle;
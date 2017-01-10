import React from 'react';
import  NoteColorListCircle from './NoteColorListCircle';

require('./style.css');

// var NoteColorList = React.createClass({
export default class NoteColorList extends React.Component {

    constructor() {
        super();

        var NoteColors = [{
            color: 'yellow',
            text: '✓'
        }, {
            color: 'coral',
            text: ''
        }, {
            color: 'lightgreen',
            text: ''
        }, {
            color: 'greenyellow',
            text: ''
        }, {
            color: 'lightblue',
            text: ''
        }, {
            color: 'orange',
            text: ''
        }, {
            color: 'pink',
            text: ''
        }];

        this.state = {
            color: NoteColors,
        };
    }

    handleChoiceColor=(event)=> {
	    if (event.target.classList.contains('color-circles')) {
	    	var newColor = event.target.style.backgroundColor;
    		var newNoteColors = this.state.color.map(function(el) {
    			return {
    				color: el.color,
    				text: (newColor == el.color) ? '✓' : ''	
    			}
    		});
    		this.setState({ color: newNoteColors });
    		this.props.onNoteColorChangeByComponent(newColor);
	    }
    }

    render() {
        return ( 
        	<div onClick={ this.handleChoiceColor }>
               	{
	   		    	this.state.color.map(function(el, i) {
            			return (
                			<NoteColorListCircle
                				key = { i }
                				color = { el.color }
                				text = { el.text }
                			/>
            			)
            		})
               	}
		    </div>
        );
    }
};

//module.exports = NoteColorList;
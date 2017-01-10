var React = require('react');

require('./style.css');

var NoteColorListCircle = React.createClass({

    render: function() {
        return ( 
        	<div className="color-circles"
            	style = {{ backgroundColor: this.props.color }}>
            	{ this.props.text } 
            </div>
        );
    }
});

module.exports = NoteColorListCircle;
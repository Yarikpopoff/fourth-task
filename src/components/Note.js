import  React from 'react';

require('./style.css');
export default class Input extends React.Component {
//var Note = React.createClass({
    render() {
		var style = { backgroundColor: this.props.color };
		return (
			<div className="note" style={style}> 
				<span className="delete-note" onClick={this.props.onDelete}>&times;</span>
				{this.props.children} 
			</div>
		);
	}
};

//module.exports = Note;
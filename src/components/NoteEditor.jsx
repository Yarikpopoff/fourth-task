var React = require('react');
var NoteColorList = require('./NoteColorList.jsx');

require('./style.css');

var NoteEditor = React.createClass({
	getInitialState: function() {
		return {
			text: '',
			color: 'yellow'
		};
	},
	
	handleTextChange: function(event) {
		this.setState({ text: event.target.value });
	},
	
	handleColorChange: function(event) {
		this.setState({ color: event.target.value });
	},

	handleNoteColorChangeByComponent: function(newColor) {
		this.setState({ color: newColor });
	},

	handleNoteAdd: function() {
		var newNote = {
			text: this.state.text,
			color: this.state.color,
			id: Date.now()
		};

		this.props.onNoteAdd(newNote);
		this.setState({ text: '' });
	},

	componentWillMount: function() {
				
	},

	componentDidMount: function() {
				
	},

	render: function() {
		return (
			<div className="note-editor">
				<textarea 
					placeholder="Enter your note here..." 
					rows={5} 
					className="textarea"
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<div className="note-panel">
					<NoteColorList onNoteColorChangeByComponent={this.handleNoteColorChangeByComponent} />
					<span>Select Color: <input type="color" ref="color" defaultValue="#FFFF00" onChange={this.handleColorChange} /></span>
					<button className="add-button" onClick={this.handleNoteAdd}>Add</button>
				</div>
			</div>
		);
	}
});

module.exports = NoteEditor;
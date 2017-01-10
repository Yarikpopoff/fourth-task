import React from 'react';
import NoteColorList from './NoteColorList';

require('./style.css');

//var NoteEditor = React.createClass({
export default class NoteEditor extends React.Component {
    constructor() {
        super();
		this.state = {
			text: '',
			color: 'yellow'
		};
	}
	
	handleTextChange=(event) =>{
		this.setState({ text: event.target.value });
	}
	
	handleColorChange=(event)=> {
		this.setState({ color: event.target.value });
	}

	handleNoteColorChangeByComponent=(newColor)=> {
		this.setState({ color: newColor });
	}

	handleNoteAdd=()=> {
		var newNote = {
			text: this.state.text,
			color: this.state.color,
			id: Date.now()
		};

		this.props.onNoteAdd(newNote);
		this.setState({ text: '' });
	}

	componentWillMount() {
				
	}

	componentDidMount() {
				
	}

	render() {
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
};

//module.exports = NoteEditor;
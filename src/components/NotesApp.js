import React from 'react';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';

require('./style.css');

export default class NotesApp extends React.Component {
    constructor() {
        super();
        // console.log('NotesApp -> getInitialState');
        this.state =  {
            isFilter: false,
            notes: [
                {
                    id: 0,
                    text: "Lorem ipsum dolor sit amet.",
                    color: "#FFD700"
                }, {
                    id: 1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam animi vitae nisi sint consectetur eius .",
                    color: "#20B2AA"
                }, {
                    id: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum obcaecati unde eveniet officiis. Voluptatum sit sint impedit laboriosam architecto, excepturi .",
                    color: "#90EE90"
                }, {
                    id: 3,
                    text: "Lorem ipsum dolor sit amet!",
                    color: "#87CEFA"
                }, {
                    id: 4,
                    text: "Lorem ipsum s.",
                    color: "#FFB6C1"
                }, {
                    id: 5,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nam illo, ducimus eligendi esse, cumque exercitationem. Quaerat adipisci exercitationem inventore maxime, quis nesciunt. Natus nostrum, dolorum culpa praesentium asperiores optio?",
                    color: "#5F9EA0"
                }, {
                    id: 6,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sed consequatur fugiat illum unde voluptas voluptatibus consequuntur. Cumque, reiciendis.",
                    color: "#FFA07A"
                }, {
                    id: 7,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi totam asperiores obcaecati laudantium nostrum facilis officia. Earum veritatis iusto.",
                    color: "#00FA9A"
                }
            ]
        };
    }

    componentWillMount() {
        // console.log('NotesApp -> componentWillMount');
    }

    componentDidMount() {
        // console.log('NotesApp -> componentDidMount');
        this._getFromLocalStorage();
    }

    componentDidUpdate() {
        // console.log('NotesApp -> componentDidUpdate');
        this._updateLocalStorage();
    }

    handleNoteDelete=(note)=>{
        // console.log('NotesApp -> handleNoteDelete');
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function (note) {
            return note.id !== noteId;
        });
        this.setState({notes: newNotes});
    }

    handleNoteAdd=(newNote)=>{
        // console.log('NotesApp -> handleNoteAdd');
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes: newNotes});
    }

    handleSearch=(event)=> {
        var searchQuery = event.target.value.toLowerCase();
        if (searchQuery !== '') {
            var displayedNotes = this.state.notes.filter(function (note) {
                var searchValue = note.text.toLowerCase();
                return searchValue.indexOf(searchQuery) !== -1;
            });
            this.setState({notes: displayedNotes, isFilter: true});
        } else {
            this._getFromLocalStorage();
            this.setState({isFilter: false});
        };
    }

    render() {
        // console.log('NotesApp -> render');
        return (
			<div className="notes-app">
				<h2 className="app-header">NotesApp</h2>
				<input type="search" placeholder="Search..." className="search-field" onChange={this.handleSearch}/>
				<NoteEditor onNoteAdd={this.handleNoteAdd}/>
				<NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
			</div>
        );
    }

    _updateLocalStorage=()=> {
        // console.log('NotesApp -> _updateLocalStorage');
        var notes = JSON.stringify(this.state.notes);
        if (!this.state.isFilter) {
            localStorage.setItem('notes', notes);
        }
        ;
    }

    _getFromLocalStorage=()=> {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({notes: localNotes});
        }
        ;
    }
};

//module.exports = NotesApp;
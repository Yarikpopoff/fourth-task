import ReactDOM from 'react-dom';
import React from 'react';
import NotesApp from './components/NotesApp.jsx';
import { Button } from 'react-bootstrap';

// ReactDOM.render(<NotesApp />, document.getElementById('mount-point'));
const buttonsInstance = (
  <div>
      <Button bsStyle="primary" bsSize="large">Large button</Button>
      <Button bsSize="large">Large button</Button>
  </div>
);

ReactDOM.render(buttonsInstance, document.getElementById('mount-point'));
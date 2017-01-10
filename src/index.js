import ReactDOM from 'react-dom';
import React from 'react';
import NotesApp from './components/NotesApp.jsx';
import Button from 'react-bootstrap';
import ButtonToolbar from 'react-bootstrap';

// ReactDOM.render(<NotesApp />, document.getElementById('mount-point'));
const buttonsInstance = (
  <div>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="large">Large button</Button>
      <Button bsSize="large">Large button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle="primary">Default button</Button>
      <Button>Default button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="small">Small button</Button>
      <Button bsSize="small">Small button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
      <Button bsSize="xsmall">Extra small button</Button>
    </ButtonToolbar>
  </div>
);

ReactDOM.render(buttonsInstance, document.getElementById('mount-point'));
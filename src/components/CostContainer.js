import React from 'react';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

require('./CostContainer.css');

export default class CostContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            totalAmount: 0
        };
    }

    alertClicked(event) {
        alert('You clicked the third ListGroupItem');
    }

    render() {

        const alertColor = this.state.totalAmount < 0 ? 'danger' : 'success';

        return (
            <div className="well wellStyles">
                <Alert bsStyle={alertColor}>Total amount: {this.state.totalAmount}</Alert>
                <ListGroup>
                    <ListGroupItem >21/01/2017 Food -246.59</ListGroupItem>
                    <ListGroupItem >21/01/2017 Salary 500.00</ListGroupItem>
                    <ListGroupItem onClick={this.alertClicked}>21/01/2017 Rent -158.25</ListGroupItem>
                </ListGroup>
                <Button bsStyle="primary" block>Add new income or expense</Button>
            </div>
        )
    }
};
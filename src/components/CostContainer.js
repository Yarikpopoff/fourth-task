import React from 'react';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

require('./CostContainer.css');

export default class CostContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            totalAmount: 0
        };
    }

    alertClicked(event) {
        console.log('You clicked the Table');
        console.log(event);
    }

    render() {

        const alertColor = this.state.totalAmount < 0 ? 'danger' : 'success';

        return (
            <div className="well wellStyles">
                <Alert bsStyle={alertColor}>Total amount: {this.state.totalAmount}</Alert>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody onClick={this.alertClicked}>
                        <tr>
                            <td>1</td>
                            <td>21/01/2017</td>
                            <td>Food</td>
                            <td>-246.59</td>
                            <td><a href="#">&times;</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>21/01/2017</td>
                            <td>Salary</td>
                            <td>500</td>
                            <td>&times;</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>21/01/2017</td>
                            <td>Rent</td>
                            <td>-158.25</td>
                            <td>&times;</td>
                        </tr>
                    </tbody>
                </Table>
                <Button bsStyle="primary" block>Add new income or expense</Button>
            </div>
        )
    }
};
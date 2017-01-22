import React from 'react';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

require('./CostContainer.css');

export default class CostContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            totalAmount: 0,
            expendituresArray: [],
            expendituresArray1: [
                {
                    id: 0,
                    date: '22.01.2017', // toLocaleDateString()
                    description: 'Food',
                    amount: -246.59
                },
                {
                    id: 1,
                    date: '22.01.2017',
                    description: 'Salary',
                    amount: 500.00
                },
                {
                    id: 2,
                    date: '22.01.2017',
                    description: 'Rent',
                    amount: -158.25
                },
                {
                    id: 3,
                    date: '22.01.2017',
                    description: 'kindergarten',
                    amount: -81.50
                }
            ] 
        };
    }

    componentWillMount() {

        const localExpendituresArray = JSON.parse(localStorage.getItem('expendituresArray'));
        if (localExpendituresArray) {
            this.setState({ 
                totalAmount: this.calcSum(localExpendituresArray), 
                expendituresArray: localExpendituresArray 
            });
        } else {
            if (this.state.expendituresArray) {
                this.setState({ 
                    totalAmount: this.calcSum(this.state.expendituresArray) 
                });
            }
        };
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    calcSum=(arr)=> {
        if (arr) {
            const sum = arr.reduce((sum, el)=>{
                return sum + el.amount;
            }, 0);
            return (Math.round(sum * 100) / 100);
        } else {
            return 0;
        }
    }
    
    pressDel=(id)=> {
        let newExpendituresArray = this.state.expendituresArray.filter((row)=> {
            return row.id !== id;
        });
        this.setState({
            expendituresArray: newExpendituresArray,
            totalAmount: this.calcSum(newExpendituresArray)
        });
    }

    addNew=()=> {
        let newRow = {
            id: Math.random().toString().slice(-10),
            date: new Date().toLocaleDateString(),
            description: 'new',
            amount: 10
        };
        let newExpendituresArray = this.state.expendituresArray.slice();
        newExpendituresArray.push(newRow);
        this.setState({
            expendituresArray: newExpendituresArray,
            totalAmount: this.calcSum(newExpendituresArray),
        });
    }

    _updateLocalStorage=()=> {
		let localExpendituresArray = JSON.stringify(this.state.expendituresArray);
		localStorage.setItem('expendituresArray', localExpendituresArray);	
	}

	_getFromLocalStorage=()=> {
		let localExpendituresArray = JSON.parse(localStorage.getItem('expendituresArray'));
		if (localExpendituresArray) {
			this.setState({ expendituresArray: localExpendituresArray });
		};
	}

    render() {

        const alertColor = this.state.totalAmount < 0 ? 'danger' : 'success';

        return (
            <div className="well wellStyles">
                <Alert bsStyle={alertColor}>Total amount: {this.state.totalAmount}</Alert>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.expendituresArray.map((el,i)=> {
                                return (
                                    <tr key = { i }>
                                        <td>{el.date}</td>
                                        <td>{el.description}</td>
                                        <td>{el.amount}</td>
                                        <td className="delRow" onClick={this.pressDel.bind(null, el.id)}>&times;</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Button bsStyle="primary" block onClick={this.addNew}>Add new income or expense</Button>
            </div>
        )
    }
};
import React from 'react';
import { Button } from 'react-bootstrap';


export default class CostContainer extends React.Component {
    render() {
        const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
        return (
            <div className="well" style={wellStyles}>
                <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
                <Button bsSize="large" block>Block level button</Button>
            </div>
        )
    }
};
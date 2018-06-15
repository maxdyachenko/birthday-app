import React, {Component} from 'react';
import '../../App.css'
import {
    Table,
    Alert
} from 'reactstrap';
import Row from './Row'
import uuid from 'uuid'

class TableToday extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table striped className="my-3">
                <caption style={{captionSide: 'top'}}><Alert color="success">
                    Send your congratulations to
                </Alert></caption>
                <tbody>
                {
                    this.props.data.map( data => {
                        return <Row key={uuid()} date={data} />
                    })
                }
                </tbody>
            </Table>
        );
    }
}

export default TableToday;

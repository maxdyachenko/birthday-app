import React from 'react';
import {
    Table,
    Alert
} from 'reactstrap';
import Row from './Row'
import uuid from 'uuid'

const TableToday = ({data}) => {
    return (
        <Table striped className="my-3">
            <caption style={{captionSide: 'top'}}><Alert color="success">
                Send your congratulations to
            </Alert></caption>
            <tbody>
            {
                data.map(item => {
                    return <Row key={uuid()} date={item}/>
                })
            }
            </tbody>
        </Table>
    )
};

export default TableToday;

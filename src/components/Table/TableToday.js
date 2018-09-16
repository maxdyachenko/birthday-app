import React from 'react';
import {Table, Alert} from 'reactstrap';
import uuid from 'uuid';
import propTypes from 'prop-types';
import Row from './Row';

const TableToday = ({data, onDelete}) => (
  <Table striped className="my-3">
    <caption style={{captionSide: 'top'}}>
      <Alert color="success">Send your congratulations to</Alert>
    </caption>
    <tbody>
      {data.map(item => (
        <Row key={uuid()} date={item} onDelete={onDelete} />
      ))}
    </tbody>
  </Table>
);

TableToday.propTypes = {
  data: propTypes.array.isRequired,
  onDelete: propTypes.func.isRequired,
};

export default TableToday;

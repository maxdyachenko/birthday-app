import React from 'react';
import {Table} from 'reactstrap';
import uuid from 'uuid';
import propTypes from 'prop-types';
import TableToday from './TableToday';
import Row from './Row';
import NoBirthdays from './NoBirthdays';
import {getDate} from '../../utils';

const TableGrid = ({data, birthData, onRowDelete}) => {
  if (
    !Object.keys(data).length &&
    data.constructor === Object &&
    !birthData.length
  )
    return <NoBirthdays />;

  return (
    <div>
      {birthData.length ? (
        <TableToday data={birthData} onDelete={onRowDelete} />
      ) : null}
      {Object.keys(data).map(curr => (
        <Table striped className="my-3 table" key={uuid()}>
          <caption style={{captionSide: 'top'}}>{curr}</caption>
          <tbody>
            {data[curr].map(item => (
              <Row
                key={uuid()}
                date={item}
                daysToBirthday={getDate(item.date)}
                onDelete={onRowDelete}
              />
            ))}
            )}
          </tbody>
        </Table>
      ))}
      )}
    </div>
  );
};

TableGrid.propTypes = {
  data: propTypes.object.isRequired,
  birthData: propTypes.array,
  onRowDelete: propTypes.func.isRequired,
};

export default TableGrid;

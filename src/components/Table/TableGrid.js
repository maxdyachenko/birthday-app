import React, {Component} from 'react';
import {Table} from 'reactstrap';
import uuid from 'uuid'
import TableToday from './TableToday'
import Row from './Row'
import NoBirthdays from './NoBirthdays'
import {getDate} from '../../utils'

class TableGrid extends Component {
    render() {
        const {data, birthData, onRowDelete} = this.props;

        if (!Object.keys(data).length && data.constructor === Object && !birthData.length) return (
            <NoBirthdays />
        );

        return (
            <div>
                {
                    birthData.length ? <TableToday data={birthData} onDelete={onRowDelete} /> : null
                }
                {
                    Object.keys(data).map(curr => {
                        return <Table
                            striped
                            className="my-3"
                            key={uuid()}
                        >
                            <caption style={{captionSide: 'top'}}>{curr}</caption>
                            <tbody>
                            {
                                data[curr].map( item => {
                                    return <Row
                                        key={uuid()}
                                        date={item}
                                        daysToBirthday={getDate(item.date)}
                                        onDelete={onRowDelete}
                                    />
                                })
                            }
                            </tbody>
                        </Table>
                    })
                }
            </div>
        );
    }
}

export default TableGrid;

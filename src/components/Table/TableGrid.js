import React, {Component} from 'react';
import {Table} from 'reactstrap';
import uuid from 'uuid'
import TableToday from './TableToday'
import Row from './Row'

class TableGrid extends Component {
    render() {
        const {dates, birthDates, daysToBirthday} = this.props;
        return (
            <div>
                {
                    birthDates.length ? <TableToday data={birthDates} /> : null
                }
                {
                    Object.keys(dates).map((curr) => {
                        return <Table
                            striped
                            className="my-3"
                            key={uuid()}
                        >
                            <caption style={{captionSide: 'top'}}>{curr}</caption>
                            <tbody>
                            {
                                dates[curr].map((date, i) => {
                                    return <Row key={uuid()} date={date} daysToBirthday={daysToBirthday[curr][i]} />
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

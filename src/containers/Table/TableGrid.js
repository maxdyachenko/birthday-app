import React, {Component} from 'react';
import '../../App.css'
import {
    Table,
} from 'reactstrap';
import {connect} from 'react-redux'
import {getDatesWithFilter} from '../../selectors'
import uuid from 'uuid'
import TableToday from '../../components/Table/TableToday'
import Row from '../../components/Table/Row'

const MSEC_PER_DAY = 86400000;

class TableGrid extends Component {
    constructor(props) {
        super(props);

        this.stateSetup();
    }

    getDate(date) {
        const birthDate = new Date();
        birthDate.setMonth(date.month - 1);
        birthDate.setDate(date.day);

        this.wasBirtThisYear(birthDate)? birthDate.setFullYear(birthDate.getFullYear() + 1) : birthDate.setFullYear(birthDate.getFullYear());

        const today = new Date();

        return Math.round(Math.abs((birthDate.getTime() - today.getTime()) / (MSEC_PER_DAY)));
    }

    wasBirtThisYear(date) {
        const currDate = new Date();

        return currDate > date;
    }

    stateSetup() {
        let obj = {};
        obj.birthToday = [];

        Object.keys(this.props.dates).map((date) => {
            for (let i = 0; i < this.props.dates[date].length; i++) {
                if (!this.getDate(this.props.dates[date][i].date))
                    obj.birthToday.push(this.props.dates[date][i])
            }
        });

        this.state = obj;
    }

    render() {
        const {dates} = this.props;
        return (
            <div>
                {
                    this.state.birthToday.length ? <TableToday data={this.state.birthToday} dayToBearth={0} /> : null
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
                                dates[curr].map((date, ind) => {
                                    return this.state.birthToday.includes(date) ? false: <Row key={uuid()} date={date} dayToBearth={this.getDate(date.date)}/>
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

const mapStateToProps = (state) => {
    return {
        dates: getDatesWithFilter(state)
    };
};


TableGrid = connect(mapStateToProps)(TableGrid);

export default TableGrid;

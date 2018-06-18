import React, {Component} from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faDots from '@fortawesome/fontawesome-free-solid/faEllipsisV'

class Row extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const { date, daysToBirthday, onDelete } = this.props;
        return (
            <tr>
                <td style={{width: '10%'}}>
                    <img
                        src={date.sex === 'male' ? "./img/man-avatar.png" : "./img/women-avatar.png"}
                        alt="user"
                        className="img-responsive"/>
                </td>
                <td style={{width: '40%'}}><a href={'/user/' + date.id}>{date.name}</a></td>
                <td style={{width: '10%'}}>{date.date.format("DD.MM.YY")}</td>
                <td style={{
                    fontWeight: 'bold',
                    color: 'green',
                    textAlign: 'center',
                    width: '30%'
                }}>
                    {daysToBirthday? daysToBirthday + ' days' : 'today' }
                </td>
                <td style={{textAlign: 'right', width: '10%'}}>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle className="table-drop-dots">
                            <FontAwesomeIcon icon={faDots} size="lg"/>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem onClick={ () => onDelete(date.id)}>Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </td>
            </tr>

        );
    }
}

export default Row;

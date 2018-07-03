import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faDots from '@fortawesome/fontawesome-free-solid/faEllipsisV'
import ModalPopup from '../Modal/Modal'

class Row extends Component {
    state = {
        dropdownOpen: false,
        modalOpen: false
    };

    toggleDropdown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    };

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    };

    render() {
        const {date, daysToBirthday, onDelete} = this.props;
        return (
            <tr>
                <td style={{width: '10%'}}>
                    <img
                        src={date.img || (date.sex === 'male' ? "./img/man-avatar.png" : "./img/women-avatar.png")}
                        alt="user"
                        className="img-responsive"/>
                </td>
                <td style={{width: '40%'}}><NavLink to={'/user/' + date.id}>{date.name}</NavLink></td>
                <td style={{width: '10%'}}>{date.date.format("DD.MM.YY")}</td>
                <td style={{
                    fontWeight: 'bold',
                    color: 'green',
                    textAlign: 'center',
                    width: '30%'
                }}>
                    {daysToBirthday ? `${daysToBirthday} days` : 'today' }
                </td>
                <td style={{textAlign: 'right', width: '10%'}}>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                        <DropdownToggle className="table-drop-dots">
                            <FontAwesomeIcon icon={faDots} size="lg"/>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><NavLink to={`edit/${date.id}`}>Edit</NavLink></DropdownItem>
                            <DropdownItem onClick={this.toggleModal}>Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </td>
                {ReactDOM.createPortal(
                    <ModalPopup
                        title="Are you sure?"
                        isOpen={this.state.modalOpen}
                        toggle={this.toggleModal}
                        onConfirm={() => {
                            onDelete(date.id);
                        }}
                    >

                    </ModalPopup>,
                    document.getElementById('root')
                )}
            </tr>

        );
    }
}

export default Row;

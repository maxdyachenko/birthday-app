import React, {Component} from 'react';
import './App.css'
import {
    Table,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faDots from '@fortawesome/fontawesome-free-solid/faEllipsisV'
class TableGrid extends Component {
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
        return (
            <Table striped className="my-3">
                <caption style={{captionSide:'top'}}>June 2018</caption>
                <tbody>
                <tr>
                    <td style={{width: '10%'}}>
                        <img src="./img/man-avatar.png" className="img-responsive"/>
                    </td>
                    <td style={{width: '40%'}}><a href="">Mark</a></td>
                    <td style={{width: '10%'}}>21.02.1997</td>
                    <td style={{fontWeight: 'bold', color: 'green', textAlign: 'center', width: '30%'}}>100d</td>
                    <td style={{textAlign: 'right', width: '10%'}}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle className="table-drop-dots">
                                <FontAwesomeIcon icon={faDots} size="lg"  />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '10%'}}>
                        <img src="./img/man-avatar.png" className="img-responsive"/>
                    </td>
                    <td style={{width: '40%'}}><a href="">Mark</a></td>
                    <td style={{width: '10%'}}>21.02.1997</td>
                    <td style={{fontWeight: 'bold', color: 'green', textAlign: 'center', width: '30%'}}>100d</td>
                    <td style={{textAlign: 'right', width: '10%'}}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle className="table-drop-dots">
                                <FontAwesomeIcon icon={faDots} size="lg"  />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '10%'}}>
                        <img src="./img/women-avatar.png" className="img-responsive"/>
                    </td>
                    <td style={{width: '40%'}}><a href="">Larry</a></td>
                    <td style={{width: '10%'}}>21.02.1997</td>
                    <td style={{fontWeight: 'bold', color: 'green', textAlign: 'center', width: '30%'}}>100d</td>
                    <td style={{textAlign: 'right', width: '10%'}}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle className="table-drop-dots">
                                <FontAwesomeIcon icon={faDots} size="lg"  />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default TableGrid;

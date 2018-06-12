import React, {Component} from 'react';
import '../../App.css'
import {
    Table,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Alert
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faDots from '@fortawesome/fontawesome-free-solid/faEllipsisV'
class TableToday extends Component {
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
                <caption style={{captionSide:'top'}}><Alert color="success">
                    Send your congratulations to
                </Alert></caption>
                <tbody>
                <tr>
                    <td style={{width: '40%'}}>Mark</td>
                    <td style={{width: '20%'}}>21.02.1997</td>
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

export default TableToday;

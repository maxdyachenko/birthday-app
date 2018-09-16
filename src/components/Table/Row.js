import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDots from '@fortawesome/fontawesome-free-solid/faEllipsisV';
import propTypes from 'prop-types';
import moment from 'moment';
import ModalPopup from '../Modal/Modal';
import {ANIMATION_DURATION} from '../../constants/utils';

class Row extends Component {
  state = {
    dropdownOpen: false,
    modalOpen: false,
  };

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  render() {
    const {date, daysToBirthday, onDelete} = this.props;
    return (
      <tr>
        <td className="avatar-td">
          <img
            src={
              date.img ||
              (date.sex === 'male'
                ? './img/man-avatar.png'
                : './img/women-avatar.png')
            }
            alt="user"
            className="img-responsive"
          />
        </td>
        <td className="name-td">
          <NavLink to={`/user/${date.id}`}>{date.name}</NavLink>
        </td>
        <td className="hidden-600px">{date.date.format('DD.MM.YY')}</td>
        <td
          style={{
            fontWeight: 'bold',
            color: 'green',
            textAlign: 'center',
          }}>
          {daysToBirthday ? `${daysToBirthday} days` : 'today'}
        </td>
        <td style={{textAlign: 'right', width: '50px'}}>
          <Dropdown
            isOpen={this.state.dropdownOpen}
            toggle={this.toggleDropdown}>
            <DropdownToggle className="table-drop-dots">
              <FontAwesomeIcon icon={faDots} size="lg" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink to={`edit/${date.id}`}>Edit</NavLink>
              </DropdownItem>
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
              setTimeout(() => onDelete(date.id), ANIMATION_DURATION);
            }}
          />,
          document.getElementById('root'),
        )}
      </tr>
    );
  }
}

Row.propTypes = {
  date: propTypes.shape({
    img: propTypes.string,
    name: propTypes.string,
    date(props, propName, componentName) {
      if (!moment.isMoment(props[propName])) {
        return new Error(
          `Invalid prop \`${propName}\` supplied to` +
            ` \`${componentName}\`. Validation failed.`,
        );
      }
    },
    tel: propTypes.string,
    info: propTypes.string,
    id: propTypes.string,
  }),
  daysToBirthday: propTypes.number,
  onDelete: propTypes.func.isRequired,
};

export default Row;

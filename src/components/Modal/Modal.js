import React from 'react';
import {Button, Modal, ModalHeader, ModalFooter} from 'reactstrap';
import propTypes from 'prop-types';

const ModalPopup = ({toggle, isOpen, onConfirm, title}) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>{title}</ModalHeader>
    <ModalFooter>
      <Button
        color="primary"
        onClick={() => {
          toggle();
          onConfirm();
        }}>
        Yes
      </Button>{' '}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
);

ModalPopup.propTypes = {
  toggle: propTypes.func.isRequired,
  isOpen: propTypes.bool.isRequired,
  onConfirm: propTypes.func,
  title: propTypes.string,
};

export default ModalPopup;

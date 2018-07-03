import React from 'react'
import {Button, Modal, ModalHeader, ModalFooter} from 'reactstrap'

const ModalPopup = ({toggle, isOpen, onConfirm, title}) => {
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        onConfirm();
                        toggle()
                    }}>Yes</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalPopup;
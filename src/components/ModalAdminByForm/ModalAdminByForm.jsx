'use client';

import { Button, Modal } from 'react-bootstrap';

// Гребанный NEXT!!!

const ModalAdminByForm = ({ show, handleClose, children }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Введіть дані</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAdminByForm;

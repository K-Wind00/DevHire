import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const RegisterForm = ({ handleModalClose }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    handleModalClose();
    navigate('/');
  };

  const handleCancel = () => {
    handleModalClose();
    navigate('/');
  };

  const handleModalHide = () => {
    handleModalClose();
  };

  return (
    <div>
      <Modal show={true} onHide={handleModalHide}>
        <Modal.Header onClick={handleCancel} closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form-floating mb-3'>
            <input type='text' className='form-control' id='floatingUsername' placeholder='Username' />
            <label htmlFor='floatingUsername'>Username</label>
          </div>
          <div className='form-floating mb-3'>
            <input type='email' className='form-control' id='floatingEmail' placeholder='name@example.com' />
            <label htmlFor='floatingEmail'>Email address</label>
          </div>
          <div className='form-floating'>
            <input type='password' className='form-control' id='floatingPassword' placeholder='Password' />
            <label htmlFor='floatingPassword'>Password</label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleRegister}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterForm;
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

const LoginForm = ({ handleModalClose }) => {
  const navigate = useNavigate()

  const handleLogin = () => {
    handleModalClose()
    navigate('/')
  }

  const handleCancel = () => {
    navigate('/')
    handleModalClose()
  }

  const handleModalHide = () => {
    handleModalClose()
  }

  return (
    <div>
      <Modal show={true} onHide={handleModalHide}>
        <Modal.Header onClick={handleCancel} closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form-floating mb-3'>
            <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' />
            <label htmlFor='floatingInput'>Email address</label>
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
          <Button variant='primary' onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default LoginForm

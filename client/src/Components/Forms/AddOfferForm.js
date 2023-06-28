import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const AddOfferForm = ({ handleModalClose }) => {

  const navigate = useNavigate();

  const [offerTitle, setOfferTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [categories, setCategories] = useState('');
  const [salary, setSalary] = useState('');
  const [companyPhoto, setCompanyPhoto] = useState('');

  const handlePublish = () => {
    // Logika dodawania nowego ogłoszenia
    handleModalClose();
  };

  const handleCancel = () => {
    handleModalClose();
    navigate('/')
  };

  return (
    <div>
      <Modal show={true} onHide={handleCancel}>
        <Modal.Header onClick={handleCancel} closeButton>
          <Modal.Title>Dodaj nowe ogłoszenie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <label htmlFor='offerTitle' className='form-label'>
              Tytuł oferty
            </label>
            <input
              type='text'
              className='form-control'
              id='offerTitle'
              value={offerTitle}
              onChange={(e) => setOfferTitle(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='companyName' className='form-label'>
              Nazwa firmy
            </label>
            <input
              type='text'
              className='form-control'
              id='companyName'
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='categories' className='form-label'>
              Kategorie
            </label>
            <input
              type='text'
              className='form-control'
              id='categories'
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='salary' className='form-label'>
              Wynagrodzenie
            </label>
            <input
              type='text'
              className='form-control'
              id='salary'
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='companyPhoto' className='form-label'>
              Zdjęcie firmy
            </label>
            <input
              type='text'
              className='form-control'
              id='companyPhoto'
              value={companyPhoto}
              onChange={(e) => setCompanyPhoto(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCancel}>
            Anuluj
          </Button>
          <Button variant='primary' onClick={handlePublish}>
            Publikuj
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddOfferForm;

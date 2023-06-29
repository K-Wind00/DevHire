import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const OfferModal = ({ offerTitle, companyName, categories, salary, companyPhoto, handleModalClose }) => {
  return (
    <div>
      <Modal show={true} onHide={handleModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{offerTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <img src={companyPhoto} alt="Company" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: 1, marginLeft: '20px' }}>
              <div style={{ marginBottom: '20px' }}>
                <h4>{companyName}</h4>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4>Lokalizacja</h4>
                <p>Rzeszów</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4>Wynagrodzenie</h4>
                <p>{salary}</p>
              </div>
            </div>
          </div>
          <div>
            <div style={{ marginBottom: '20px' }}>
                <h4>Technologie</h4>
                <p>{categories}</p>
            </div>
            <h4>Opis</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OfferModal;

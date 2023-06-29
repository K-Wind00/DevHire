import React, { useState } from 'react';
import OfferComponent from '../Offer/OfferComponent';
import Pagination from './Pagination';
import OfferModal from '../Offer/OfferModal';
import SearchPanelComponent from '../SearchPanel/SearchPanelComponent';

const OfferListComponent = () => {
  const offers = [
    { id: 1, title: 'Offer 1', companyName: 'Company A', categories: 'Category A', salary: '1000', companyPhoto: 'company-a.jpg' },
    { id: 2, title: 'Offer 2', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 3, title: 'Offer 3', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 4, title: 'Offer 4', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 5, title: 'Offer 5', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 6, title: 'Offer 6', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 7, title: 'Offer 7', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 8, title: 'Offer 8', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 9, title: 'Offer 9', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 10, title: 'Offer 10', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },

  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 10;
  const totalItems = offers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleModalOpen = (offer) => {
    setSelectedOffer(offer);
  };

  const handleModalClose = () => {
    setSelectedOffer(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const getDisplayedOffers = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    let filteredOffers = offers;

    if (searchQuery) {
      filteredOffers = offers.filter((offer) =>
        offer.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredOffers.slice(start, end);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <SearchPanelComponent handleSearch={handleSearch} />
      <div className="offer-list">
        {getDisplayedOffers().map((offer) => (
          <OfferComponent
            key={offer.id}
            offerTitle={offer.title}
            companyName={offer.companyName}
            categories={offer.categories}
            salary={offer.salary}
            companyPhoto={offer.companyPhoto}
            handleModalOpen={() => handleModalOpen(offer)}
          />
        ))}
      </div>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {selectedOffer && (
        <OfferModal
          offerTitle={selectedOffer.title}
          companyName={selectedOffer.companyName}
          categories={selectedOffer.categories}
          salary={selectedOffer.salary}
          companyPhoto={selectedOffer.companyPhoto}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default OfferListComponent;

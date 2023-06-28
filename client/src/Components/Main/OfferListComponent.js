import React, { useState } from 'react';
import OfferComponent from '../Offer/OfferComponent';
import Pagination from './Pagination';

const OfferListComponent = () => {
  const offers = [
    { id: 1, title: 'Offer 1', companyName: 'Company A', categories: 'Category A', salary: '1000', companyPhoto: 'company-a.jpg' },
    { id: 2, title: 'Offer 2', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 3, title: 'Offer 3', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 4, title: 'Offer 4', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 5, title: 'Offer 5', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 6, title: 'Offer 6', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 7, title: 'Offer 7', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 7, title: 'Offer 7', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 7, title: 'Offer 7', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 7, title: 'Offer 7', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 7, title: 'Offer 7', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },

    { id: 8, title: 'Offer 8', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 9, title: 'Offer 9', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 10, title: 'Offer 10', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 11, title: 'Offer 11', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 12, title: 'Offer 12', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 13, title: 'Offer 13', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 14, title: 'Offer 14', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 15, title: 'Offer 15', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 16, title: 'Offer 17', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
    { id: 17, title: 'Offer 18', companyName: 'Company B', categories: 'Category B', salary: '2000', companyPhoto: 'company-b.jpg' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = offers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getDisplayedOffers = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return offers.slice(start, end);
  };

  return (
    <div style={{ marginTop: '30px'}}>
    <div className="offer-list" >
      {getDisplayedOffers().map((offer) => (
        <OfferComponent
         key={offer.id}
         offerTitle={offer.title}
         companyName={offer.companyName}
         categories={offer.categories}
         salary={offer.salary}
         companyPhoto={offer.companyPhoto}
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
    </div>
  );
};

export default OfferListComponent;

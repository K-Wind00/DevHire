import React from 'react';

const OfferComponent = ({ offerTitle, companyName, categories, salary, companyPhoto }) => {
  const handleClick = () => {
    console.log(`Clicked on offer: ${offerTitle}`);
  };

  return (
    <div className="offer" style={offerStyles.offer} onClick={handleClick}>
      <img src={companyPhoto} alt="Company" style={offerStyles.image} />
      <div style={offerStyles.details}>
        <h4 style={offerStyles.title}>{offerTitle}</h4>
        <p style={offerStyles.company}>{companyName}</p>
      </div>
      <div style={offerStyles.info}>
        <div style={offerStyles.salary}>{salary}</div>
        <div style={offerStyles.categories}>{categories}</div>
      </div>
    </div>
  );
};

export default OfferComponent;

const offerStyles = {
    offer: {
      backgroundColor: '#f2f2f2',
      border: '1px solid black',
      padding: '10px',
      margin: '10px auto 0',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      width: '80%'
    },
    image: {
      maxWidth: '100px',
      marginRight: '30px',
    },
    details: {
      flex: 1,
    },
    title: {
      marginBottom: '5px',
    },
    company: {
      marginBottom: '10px',
      fontSize: '10px'
    },
    info: {
      display: 'flex',
      alignItems: 'center',
    },
    salary: {
      borderRadius: '5px',
      width: '120px',
      textAlign: 'center',
      backgroundColor: 'lightblue',
      padding: '5px 10px',
      marginLeft: '200px',
      border: '1px solid black',
    },
    categories: {
      backgroundColor: 'lightgreen',
      borderRadius: '5px',
      padding: '5px 10px',
      border: '1px solid black',
      margin: '0 75px' 
    },
  };

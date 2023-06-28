import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#333', width: '100%', height: '100px' }}>
      <div className="container">
        <p style={{ color: '#fff' }}>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

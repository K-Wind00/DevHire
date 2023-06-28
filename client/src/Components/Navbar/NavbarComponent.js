import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = ({ handleLoginModalOpen, handleRegisterModalOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Logo
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          onClick={handleDropdownToggle}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className={`collapse navbar-collapse ${dropdownOpen ? 'show' : ''}`}>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link active' to='/'>
                Publikuj
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <div className='nav-link dropdown-toggle' onClick={handleDropdownToggle}>
                Zaloguj
              </div>
              <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <Link className='dropdown-item' to='/login' onClick={handleLoginModalOpen}>
                  Zaloguj
                </Link>
                <Link className='dropdown-item' to='/register' onClick={handleRegisterModalOpen}>
                  Zarejestruj
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;

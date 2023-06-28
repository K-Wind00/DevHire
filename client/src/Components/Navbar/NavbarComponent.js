import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavbarComponent = () => {
  
  const handleDropdownHover = () => {
    const dropdownMenu = document.getElementById('dropdown-menu')
    dropdownMenu.style.display = 'block'
  }
  
  const handleDropdownLeave = () => {
    const dropdownMenu = document.getElementById('dropdown-menu')
    dropdownMenu.style.display = 'none'
  }
  
  return (
    <Router>
    <nav style={navbarStyle}>
      <div style={logoStyle}>Logo</div>
      <div style={actionsStyle}>
        <button style={buttonStyle}>PUBLIKUJ</button>
        <div
          style={dropdownStyle}
          onMouseEnter={handleDropdownHover}
          onMouseLeave={handleDropdownLeave}
        >
          <button style={dropdownToggleStyle}>ZALOGUJ</button>
          <div id="dropdown-menu" style={dropdownMenuStyle}>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
            <Link to="/register" style={linkStyle}>
              Register
            </Link>
            <Link to="/login-company" style={linkStyle}>
              Login as company
            </Link>
            <Link to="/register-company" style={linkStyle}>
              Register as company
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </Router>
  )
}

export default NavbarComponent

const navbarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'black',
  margin: '0',
  color: '#fff',
  padding: '10px',
}

const logoStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}

const actionsStyle = {
  display: 'flex',
  alignItems: 'center',
}

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '8px 16px',
  marginRight: '10px',
  cursor: 'pointer',
}

const dropdownStyle = {
  position: 'relative',
}

const dropdownToggleStyle = {
  backgroundColor: 'transparent',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
}

const dropdownMenuStyle = {
  position: 'absolute',
  top: '100%',
  right: 0,
  backgroundColor: '#333',
  color: '#fff',
  padding: '8px',
  display: 'none',
}

const linkStyle = {
  display: 'block',
  color: '#fff',
  textDecoration: 'none',
  marginBottom: '4px',
}
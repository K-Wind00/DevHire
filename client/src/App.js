import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/Navbar/NavbarComponent';
import SearchPanelComponent from './Components/SearchPanel/SearchPanelComponent';
import MainPanelComponent from './Components/Main/MainPanelComponent';
import Footer from './Components/Footer/FooterComponent';
import LoginForm from './Components/Forms/LoginForm';
import RegisterForm from './Components/Forms/RegisterForm';

function App() {
  const [, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Router>
        <NavbarComponent handleModalOpen={handleModalOpen} handleModalClose={handleModalClose} />
        <Routes>
          <Route path='/login' element={<LoginForm handleModalClose={handleModalClose} />} />
          <Route path='/register' element={<RegisterForm handleModalClose={handleModalClose} />} />
        </Routes>
        <SearchPanelComponent></SearchPanelComponent>
        <MainPanelComponent></MainPanelComponent>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

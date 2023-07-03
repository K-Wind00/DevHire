import React, { useState } from 'react';
import { Login } from '../LoginComponent/Login';
import { Register } from '../RegisterComponent/Register';
import { Publish } from '../PublishComponent/Publish';

export const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSignInClick = () => {
    setIsLoginOpen(true);
  };

  const handleSignInClose = () => {
    setIsLoginOpen(false);
  };

  const handleSignUpClick = () => {
    setIsRegisterOpen(true);
  };

  const handleSignUpClose = () => {
    setIsRegisterOpen(false);
  };

  const handleLoginSuccess = (username) => {
    setLoggedInUser(username);
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="navBar flex justify-between items-center p-6">
      <div className="logoDiv">
        <h1 className="logo text-3xl text-blue-500 font-bold">
          <strong>Dev</strong>Hire
        </h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-gray-700 hover:text-blue-500">Jobs</li>
        <li className="menuList text-gray-700 hover:text-blue-500">
          <Publish loggedInUser={loggedInUser} />
        </li>
        {loggedInUser ? (
          <li className="menuList text-gray-700">
            Welcome, {loggedInUser}!
            <button
              className="text-blue-500 ml-[5px] hover:text-blue-700"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li
              className="menuList text-gray-700 hover:text-blue-500 cursor-pointer"
              onClick={handleSignInClick}
            >
              Sign in
            </li>
            <li
              className="menuList text-gray-700 hover:text-blue-500 cursor-pointer"
              onClick={handleSignUpClick}
            >
              Sign up
            </li>
          </>
        )}
      </div>

      {isLoginOpen && (
        <Login onClose={handleSignInClose} onLoginSuccess={handleLoginSuccess} />
      )}
      {isRegisterOpen && (
        <Register
          onClose={handleSignUpClose}
          onRegisterSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
};

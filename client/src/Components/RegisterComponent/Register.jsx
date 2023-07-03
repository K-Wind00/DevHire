import React, { useState } from 'react'
import axios from 'axios'

export const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isOpen, setIsOpen] = useState(true)
  const [error, setError] = useState('')


  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')

    try {
        const response = await axios.post('http://localhost:3000/auth/register', { username, email, password })
        
        console.log(response.data)
    } catch (error) {
        setError("Registration failed! Please try again!")
    }

  }

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
      <div className="registerContainer w-[550px] h-[400px] max-w-[400px] p-4 bg-white rounded shadow relative">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 absolute top-2 right-2"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1 font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

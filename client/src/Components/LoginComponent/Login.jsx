import React, { useState } from 'react'
import axios from 'axios'

export const Login = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post('http://localhost:3000/auth/login', { username, password })
      const { access_token } = response.data
      localStorage.setItem('access_token', access_token)

      onLoginSuccess(username)
    } catch (error) {
      setError('Invalid user data! Try again')
    }
  }

  const handleClose = () => {
    setUsername('')
    setPassword('')
    setError('')
    onClose()
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
      <div className="loginContainer w-[550px] h-[300px] max-w-[400px] p-4 bg-white rounded shadow relative">
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
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleLogin}>
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
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

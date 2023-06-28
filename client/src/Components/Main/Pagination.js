import React from 'react'

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)

  const handlePageChange = (page) => {
    if (page === currentPage) {
      return 
    }

    onPageChange(page)
  }

  return (
    <div className="pagination" style={containerStyle}>
      {pageNumbers.map((page) => (
        <button
          key={page}
          style={page === currentPage ? { ...buttonStyle, ...activeButtonStyle } : buttonStyle}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination

const buttonStyle = {
    padding: '8px 12px',
    margin: '15px 5px',
    border: 'none',
    backgroundColor: '#f2f2f2',
    color: '#333',
    cursor: 'pointer',
    fontSize: '14px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  }

  const activeButtonStyle = {
    backgroundColor: '#333',
    color: '#fff',
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  }

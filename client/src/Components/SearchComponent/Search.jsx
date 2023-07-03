import React, { useState } from 'react'
import {AiOutlineCloseCircle, AiOutlineSearch} from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { BsHouseDoor } from 'react-icons/bs'

export const Search = ({ onDataFiltered }) => {
    const [searchData, setSearchData] = useState({
      offerTitle: '',
      companyName: '',
      localization: '',
    })
  
    const handleInputChange = (e) => {
      const { name, value } = e.target
      setSearchData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
  
    const handleSearch = (e) => {
      e.preventDefault()
      onDataFiltered(searchData)
    }
  
    const handleClear = () => {
      setSearchData({
        offerTitle: '',
        companyName: '',
        localization: '',
      })
      onDataFiltered({})
    }
    
  
    return (
      <div className='searchDiv grid gap-10 bg-greyIsh rounded-[15px] p-[3rem]'>
        <form onSubmit={handleSearch}>
          <div className='firstDiv flex justify-between items-center rounded-[15px] gap-[10px] bg-white p-5 shadow-1g shadow-greyIsh-700'>
            <div className='flex gap-2 items-center'>
              <AiOutlineSearch className='text-[25px] icon' />
              <input
                type='text'
                name='offerTitle'
                value={searchData.offerTitle}
                onChange={handleInputChange}
                className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                placeholder='Search job here'
              />
              <AiOutlineCloseCircle
                className='text-[30px] text-[#a5a6a6] hover:text-blueColor icon'
                onClick={() => setSearchData((prevData) => ({ ...prevData, offerTitle: '' }))}
              />
            </div>
            <div className='flex gap-2 items-center'>
              <BsHouseDoor className='text-[25px] icon' />
              <input
                type='text'
                name='companyName'
                value={searchData.companyName}
                onChange={handleInputChange}
                className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                placeholder='Search job by company'
              />
              <AiOutlineCloseCircle
                className='text-[30px] text-[#a5a6a6] hover:text-blueColor icon'
                onClick={() => setSearchData((prevData) => ({ ...prevData, companyName: '' }))}
              />
            </div>
            <div className='flex gap-2 items-center'>
              <CiLocationOn className='text-[25px] icon' />
              <input
                type='text'
                name='localization'
                value={searchData.localization}
                onChange={handleInputChange}
                className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                placeholder='Search job by location'
              />
              <AiOutlineCloseCircle
                className='text-[30px] text-[#a5a6a6] hover:text-blueColor icon'
                onClick={() => setSearchData((prevData) => ({ ...prevData, localization: '' }))}
              />
            </div>
  
            <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
              Search
            </button>
          </div>
        </form>
  
        <div className='secDiv flex items-center gap-10 justify-center m-[15px]'>
          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor='relevance' className='text-[#808080] font-semibold'>
              Sort by:
            </label>
  
            <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
              <option value=''>Relevance</option>
              <option value=''>Inclusive</option>
              <option value=''>Starts with</option>
              <option value=''>Contains</option>
            </select>
          </div>
          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor='type' className='text-[#808080] font-semibold'>
              Type:
            </label>
  
            <select name='' id='type' className='bg-white rounded-[3px] px-4 py-1'>
              <option value=''>Full-time</option>
              <option value=''>Remote</option>
              <option value=''>Contract</option>
              <option value=''>Part-time</option>
            </select>
          </div>
          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor='level' className='text-[#808080] font-semibold'>
              Seniority:{' '}
            </label>
  
            <select name='' id='level' className='bg-white rounded-[3px] px-4 py-1'>
              <option value=''>Senior</option>
              <option value=''>Mid</option>
              <option value=''>Junior</option>
              <option value=''>Intern</option>
            </select>
          </div>
          <span className='text-[#a1a1a1] cursor-pointer' onClick={handleClear}>
            Clear all
          </span>
        </div>
      </div>
    )
  }

  
  

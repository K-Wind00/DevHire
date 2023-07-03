import React, { useState, useEffect } from 'react'
import { BsCashCoin } from 'react-icons/bs'
import { fetchAllJobs } from '../../Services/jobsService'
import { LiaFileContractSolid } from 'react-icons/lia'

export const Jobs = ({ filteredData }) => {
    return (
      <div>
        <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
          {filteredData &&
            filteredData.map((item) => (
              <div
                key={item.id}
                className='group group/item singleJob w-[350px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                <span className='flex justify-between items-center gap-4'>
                  <h3 className='text-[20px] font-semibold text-textColor group-hover:text-white'>
                    {item.offerTitle}
                  </h3>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BsCashCoin /> ${item.salary}
                  </span>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <LiaFileContractSolid /> {item.contract}
                  </span>
                </span>
                <h6 className='text-[#ccc] mt-[2px]'>{item.categories}</h6>
                <h6 className='text-[#ccc] mt-[2px]'>{item.seniority}</h6>
                <h6 className='text-[#ccc] mt-[2px]'>{item.localization}</h6>
                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:'>
                  {item.description}
                </p>
  
                <div className='company flex items-center gap-2'>
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                    {item.companyName}
                  </span>
                </div>
  
                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                  Apply now
                </button>
              </div>
            ))}
        </div>
      </div>
    )
  }

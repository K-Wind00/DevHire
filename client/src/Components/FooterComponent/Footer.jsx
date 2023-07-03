import React from 'react'

export const Footer = () => {
	return (
		<div className='footer p-[5rem] mb-4 bg-blueColor rounded-[20px] gap-[8] grid grid-cols-5 m-auto items-center justify-center'>
			<div>
				<div className='logoDiv'>
					<h1 className='logo text-3xl text-white font-bold pb-[1.5rem]'>
						<strong>Dev</strong>Hire
					</h1>
				</div>
                <p className="text-white pb-[13px] opacity-70 leading-7">
                    We always make our seekers and companies find the best jobs and employers find the best candidates
                </p>
			</div>
            <div className="grid flex justify-center">
                <span className='divTitle text-[18px] font-semibold  pb-[1.5rem] text-white'>
                    Company
                </span>
                <div className="grid gap-3">
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>About us</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Blog</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Jobs</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact</li>
                </div>
            </div>
		</div>
	)
}

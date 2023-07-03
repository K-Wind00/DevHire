  import React, { useState, useEffect } from 'react'
  import { Navbar } from './Components/NavbarComponent/Navbar'
  import { Search } from './Components/SearchComponent/Search'
  import { Jobs } from './Components/JobComponent/Jobs'
  import { Value } from './Components/ValueComponent/Value'
  import { Footer } from './Components/FooterComponent/Footer'
  import { fetchAllJobs } from './Services/jobsService'


  const App = () => {
    const [jobsData, setJobsData] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await fetchAllJobs()
          setJobsData(result)
          setFilteredData(result)
        } catch (error) {
          console.error(error)
        }
      }
  
      fetchData()
    }, [])
  
    const handleDataFiltered = (searchData) => {
      const { offerTitle, companyName, localization } = searchData
      let filteredJobs = jobsData
  
      if (offerTitle) {
        filteredJobs = filteredJobs.filter((job) =>
          job.offerTitle.toLowerCase().includes(offerTitle.toLowerCase())
        )
      }
  
      if (companyName) {
        filteredJobs = filteredJobs.filter((job) =>
          job.companyName.toLowerCase().includes(companyName.toLowerCase())
        )
      }
  
      if (localization) {
        filteredJobs = filteredJobs.filter((job) =>
          job.localization.toLowerCase().includes(localization.toLowerCase())
        )
      }
  
      setFilteredData(filteredJobs)
    }
  
    return (
      <div className='w-[85%] m-auto bg-[#ddd]'>
        <Navbar />
        <Search onDataFiltered={handleDataFiltered} />
        <Jobs filteredData={filteredData} />
        <Value />
        <Footer />
      </div>
    )
  }
  
  export default App
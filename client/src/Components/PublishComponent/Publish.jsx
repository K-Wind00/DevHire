import React, { useState } from 'react';

export const Publish = ({ loggedInUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [offerTitle, setOfferTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [categories, setCategories] = useState('');
  const [salary, setSalary] = useState('');
  const [localization, setLocalization] = useState('');
  const [country, setCountry] = useState('');
  const [contract, setContract] = useState('');
  const [seniority, setSeniority] = useState('');
  const [description, setDescription] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    // Reset form fields
    setOfferTitle('');
    setCompanyName('');
    setCategories('');
    setSalary('');
    setLocalization('');
    setCountry('');
    setContract('');
    setSeniority('');
    setDescription('');
  };

  const handlePublish = async (e) => {
    e.preventDefault();

    // Create the offer object
    const offer = {
      offerTitle,
      companyName,
      categories,
      salary,
      localization,
      country,
      contract,
      seniority,
      description,
    };

    try {
      // Send a POST request to the backend endpoint
      const response = await fetch('http://localhost:3000/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(offer),
      });

      if (response.ok) {
        // Offer created successfully
        console.log('Offer created successfully');
        handleCloseModal();
      } else {
        // Handle error
        console.log('Error creating offer');
      }
    } catch (error) {
      // Handle error
      console.log('Error:', error.message);
    }
  };

  return (
    <div>
      {loggedInUser ? (
        <button onClick={handleOpenModal}>Publish</button>
      ) : (
        <button disabled>Publish</button>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg p-6 w-[600px]">
            <h2 className="text-xl font-bold mb-4">Publish</h2>
            <form onSubmit={handlePublish}>
              <div className="mb-4">
                <label htmlFor="offerTitle" className="block font-bold">
                  Offer Title
                </label>
                <input
                  type="text"
                  id="offerTitle"
                  className="w-full border rounded p-2"
                  value={offerTitle}
                  onChange={(e) => setOfferTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="companyName" className="block font-bold">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full border rounded p-2"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="categories" className="block font-bold">
                  Categories
                </label>
                <input
                  type="text"
                  id="categories"
                  className="w-full border rounded p-2"
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="salary" className="block font-bold">
                  Salary
                </label>
                <input
                  type="text"
                  id="salary"
                  className="w-full border rounded p-2"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="localization" className="block font-bold">
                  Localization
                </label>
                <input
                  type="text"
                  id="localization"
                  className="w-full border rounded p-2"
                  value={localization}
                  onChange={(e) => setLocalization(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="block font-bold">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="w-full border rounded p-2"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contract" className="block font-bold">
                  Contract
                </label>
                <select
                  id="contract"
                  className="w-full border rounded p-2"
                  value={contract}
                  onChange={(e) => setContract(e.target.value)}
                >
                  <option value="">Select Contract Type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Part-Time">Part-Time</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="seniority" className="block font-bold">
                  Seniority
                </label>
                <select
                  id="seniority"
                  className="w-full border rounded p-2"
                  value={seniority}
                  onChange={(e) => setSeniority(e.target.value)}
                >
                  <option value="">Select Seniority Level</option>
                  <option value="Senior">Senior</option>
                  <option value="MID">MID</option>
                  <option value="Junior">Junior</option>
                  <option value="Intern">Intern</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block font-bold">
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full border rounded p-2"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 mr-2 rounded"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

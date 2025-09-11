import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Assuming Header and Footer components are available


const GetInvolved = () => {
  // Use useEffect to scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty array ensures this runs only once

  const [formData, setFormData] = useState({
    fullName: '',
    nicNumber: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    district: '',
    dsDivision: '',
    gnDivision: '',
    phoneNumber: '',
    email: '',
    focusArea: '',
    suggestion: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
  };

  const inputStyle = "w-full p-2 bg-gray-50 border border-gray-200 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#932E40] focus:border-[#932E40]";
  const labelStyle = "block text-sm font-semibold text-[#932E40]";

  return (
    <div>
      <Header />
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out;
          }
          .required-label::after {
            content: '*';
            color: #ef4444; /* red-500 */
            margin-left: 0.25rem;
          }
        `}
      </style>
      
      {/* Hero Section */}
      <section  className="relative pt-40 pb-20 text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/getinvolved_hero_img.png')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">Get Involved</h1>
          <p className="mt-4 text-lg drop-shadow-md">
            Home / <span className="font-semibold">Get Involved</span>
          </p>
        </div>
      </section>

      <main className="flex justify-center items-center py-12 px-4">
        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-4xl animate-fade-in">
          <h2 className="text-3xl font-bold text-center text-[#932E40]">Share Your Ideas</h2>
          <p className="mt-2 text-center text-gray-600">
            Fill out the form below to support the Prajahitha's Movement with your ideas and help uplift communities.
          </p>

          {isSubmitted ? (
            <div className="mt-8 text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md animate-fade-in" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline ml-2">Your application has been submitted. Thank you for sharing your ideas!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Full Name */}
              <div className="col-span-1 sm:col-span-2">
                <label htmlFor="fullName" className={`${labelStyle} required-label`}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* NIC Number and Date of Birth */}
              <div>
                <label htmlFor="nicNumber" className={`${labelStyle} required-label`}>NIC Number</label>
                <input
                  type="text"
                  name="nicNumber"
                  id="nicNumber"
                  placeholder="Enter your NIC number"
                  value={formData.nicNumber}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="dateOfBirth" className={`${labelStyle} required-label`}>Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* Gender */}
              <div className="col-span-1 sm:col-span-2">
                <label className={`${labelStyle} required-label`}>Gender</label>
                <div className="flex flex-wrap space-x-4 mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === 'Male'}
                      onChange={handleChange}
                      className="form-radio text-[#932E40] h-5 w-5 rounded-full"
                      required
                    />
                    <span className="ml-2 text-gray-700">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === 'Female'}
                      onChange={handleChange}
                      className="form-radio text-[#932E40] h-5 w-5 rounded-full"
                      required
                    />
                    <span className="ml-2 text-gray-700">Female</span>
                  </label>
                </div>
              </div>

              {/* Address */}
              <div className="col-span-1 sm:col-span-2">
                <label htmlFor="address" className={`${labelStyle} required-label`}>Address</label>
                <textarea
                  name="address"
                  id="address"
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`${inputStyle} h-24 resize-none`}
                  required
                />
              </div>

              {/* District, DS Division, GN Division - Now responsive with a 3-column layout on larger screens */}
              <div className="col-span-1 sm:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="district" className={`${labelStyle} required-label`}>District</label>
                  <select
                    name="district"
                    id="district"
                    value={formData.district}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  >
                    <option value="" disabled>Select District</option>
                    <option value="district1">District 1</option>
                    <option value="district2">District 2</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="dsDivision" className={`${labelStyle} required-label`}>DS Division</label>
                  <select
                    name="dsDivision"
                    id="dsDivision"
                    value={formData.dsDivision}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  >
                    <option value="" disabled>Select DS Division</option>
                    <option value="ds1">DS 1</option>
                    <option value="ds2">DS 2</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="gnDivision" className={`${labelStyle} required-label`}>GN Division</label>
                  <select
                    name="gnDivision"
                    id="gnDivision"
                    value={formData.gnDivision}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  >
                    <option value="" disabled>Select GN Division</option>
                    <option value="gn1">GN 1</option>
                    <option value="gn2">GN 2</option>
                  </select>
                </div>
              </div>

              {/* Phone Number and Email */}
              <div>
                <label htmlFor="phoneNumber" className={`${labelStyle} required-label`}>Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={labelStyle}>Email (Optional)</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              {/* Choose Your Area of Focus */}
              <div className="col-span-1 sm:col-span-2">
                <label htmlFor="focusArea" className={`${labelStyle} required-label`}>Choose Your Area of Focus</label>
                <select
                  name="focusArea"
                  id="focusArea"
                  value={formData.focusArea}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                >
                  <option value="" disabled>Select your areas of focus</option>
                  <option value="area1">Area 1</option>
                  <option value="area2">Area 2</option>
                </select>
              </div>

              {/* Share Your Suggestion */}
              <div className="col-span-1 sm:col-span-2">
                <label htmlFor="suggestion" className={`${labelStyle} required-label`}>Share Your Suggestion</label>
                <textarea
                  name="suggestion"
                  id="suggestion"
                  placeholder="Describe your areas of focus and ideas"
                  value={formData.suggestion}
                  onChange={handleChange}
                  className={`${inputStyle} h-32 resize-none`}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#932E40] text-white font-bold rounded-lg shadow-lg hover:bg-[#7f2837] hover:scale-105 transition-all duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolved;

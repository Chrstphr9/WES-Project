import React, { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(25);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    updateProgress();
  };


  return (
    <>
      <div className='relative pt-10 h-[870px] w-full max-w-[600px] mx-auto bg-white'>
        <div className='text-center'>
          <h2 className='text-[24px] font-bold mb-2 mt-4'>Your Education</h2>
          <p className='text-[16px] text-gray-500 mb-4 mt-4 font-normal'>Tell us about your academic background</p>
          <p className='text-blue-500 font-semibold text-[16px]'>800 WESPoint remaining to unlock ESA</p>
          <div className='mx-auto max-w-[552px] h-[73px] bg-[#E6EEF7] rounded-lg mt-4 flex items-center justify-center'>
            <p className='text-[#0256B2] text-[18px] font-extrabold'>Your Reward for this step is 200 WESPoints</p>
          </div>
        </div>

        {/* Form */}
        <form>
          <div className='mb-4 flex flex-col  pt-[40px]'>
            <label className='font-semibold text-[16px] ml-3 lg:ml-6'>
              Name Of Institution <span className="text-red-500">*</span>
            </label>
            <div className='w-full flex justify-center ss:justify-start px-5  '>
              <select
                name='institution'
                value={formData.institution}
                onChange={handleChange}
                className='text-[#7F8184] h-[48px] w-[400px] lg:w-[552px] border rounded-lg px-3 py-2 ss:w-[550px]'
              >
                <option value="WESOnline">WESOnline</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className='mb-4'>
            <label className='font-semibold text-[16px] ml-3 lg:ml-6'>
              Where are you on your journey <span className="text-red-500">*</span>
            </label>
            <div className='w-full flex justify-center ss:justify-start px-5'>
              <select
                type="level"
                value={formData.level}
                onChange={handleChange}
                className='text-[#7F8184] h-[48px] w-[400px] lg:w-[552px] border rounded-lg px-3 py-2 ss:w-[550px]'
              >
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
              </select>
            </div>
          </div>

          <div className="lg:flex lg:items-center lg:gap-6 ">
            <div className="mb-4 lg:ml-6 w-full  ml-4">
              <label className="block text-sm font-semibold mb-2">
                Field Of Study <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                className=" text-[#7F8184] w-[400px] lg:w-[265px] h-[48px] rounded-lg border px-3 ss:w-[550px]"
                placeholder="Chemistry"
              />
            </div>

            <div className="mb-4 lg:ml-6 w-full  ml-3">
              <label className="block text-sm font-semibold mb-2">
                GPA <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="gpa"
                value={formData.gpa}
                onChange={handleChange}
                className="text-[#7F8184] w-[400px] lg:w-[250px] h-[48px] rounded-lg border px-3 ss:w-[550px]"
                placeholder="------"
              />
            </div>
          </div>

          <div className='mb-4'>
            <label className='font-semibold text-[16px] ml-3 lg:ml-6'>
              What areas intrest you <span className="text-red-500">*</span>
            </label>
            <div className='w-full flex justify-center ss:justify-start px-5  '>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className='text-[#7F8184] h-[48px] w-[400px] lg:w-[552px] border rounded-lg px-3 py-2 ss:w-[550px]'
              >
                <option value="">Select Interest</option>
                <option value="Business & Management">Business & Management</option>
                <option value="Technology">Technology</option>
                <option value="Science">Science</option>
              </select>
            </div>

            <div className="flex justify-between items-center w-full pt-9 lg:pt-20">
              <button type="button" className="text-black font-medium ml-6">
                Skip For Now
              </button>
              <button
                type="submit"
                className="bg-[#0256B2] lg:w-[190px] text-white font-semibold px-8 py-3 rounded-lg mr-6">
                Continue
              </button>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default App

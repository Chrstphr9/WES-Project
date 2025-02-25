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
          <div className='mb-4 flex flex-col items-start'>
            <label className=' font-semibold text-[16px] ml-3 lg:ml-6'>Name Of Institution *</label>
            <div className='w-full flex justify-center'>
            <select
              name='institution'
              value={formData.institution}
              onChange={handleChange}
              className=' w-[400px] lg:w-[552px] border rounded px-3 py-2 '
              >
                <option value="">Select Institution</option>
                <option value="WESOnline">WESOnline</option>
                <option value="Other">Other</option>
            </select>
            </div>
          </div>
          
          <div className='mb-4'>
            <label className='font-semibold text-[16px]'>Where are you on your journey *</label>
          </div>
          <div className="mb-4">
            <label className='font-semibold text-[16px]'>Field of Study *</label>
          </div>
          <div className='mb-4'>
            <label className='font-semibold text-[16px]'>GPA *</label>
          </div>
          <div className='mb-4'>
            <label className='font-semibold text-[16px]'>What areas intrest you *</label>
          </div>
        </form>
     </div>
    </>
  )
}

export default App

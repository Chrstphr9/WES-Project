import React, { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(25);
  const [formData, setFormData] = useState({})
 

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
     </div>
    </>
  )
}

export default App

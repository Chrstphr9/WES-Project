import React, { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(25);
  const [formData, setFormData] = useState({})
 

  return (
    <>
     <div className='w-full max-w-[1440px] mx-auto bg-white'>
        <h2 className='text-xl font-semibold mb-2 text-center'>Your Education</h2>
        <p className='text-lg text-gray-500 mb-4 text-center'>Tell us about your academic background</p>
        
     </div>
    </>
  )
}

export default App

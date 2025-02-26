import React, { useState } from 'react'
import Gift from '../assets/gift.png';
import PopUp from "../components/PopUp"; 


const firstPage = () => {

    const [progress, setProgress] = useState(25);
      const [formData, setFormData] = useState({
        institution: "",
        level: "",
        fieldOfStudy: "",
        gpa: "",
        interest: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        updateProgress();
      };
    
      const updateProgress = () => {
        const filledFields = Object.values(formData).filter((value) => value)
          .length;
        setProgress((filledFields / 5) * 100);
      };
    
      const [isPopupOpen, setIsPopupOpen] = useState(false);
      

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* Progress Indicator */}
            <div className="flex gap-2 mb-4">
              {[25, 50, 75, 100].map((p, index) => (
                <div
                  key={index}
                  className={`h-2 flex-1 rounded-full ${progress >= p ? "bg-[#0256B2]" : "bg-gray-300"
                    }`}
                ></div>
              ))}
            </div>
            <div className="relative pt-5 h-[870px] w-full max-w-[600px] mx-auto bg-white">
              <div className="text-center">
                <h2 className="text-[24px] font-bold mb-2 mt-4">Your Education</h2>
                <p className="text-[16px] text-gray-500 mb-4 mt-4 font-normal">
                  Tell us about your academic background
                </p>
                <p className="text-[#0256B2] font-semibold text-[16px]">
                  800 WESPoint remaining to unlock ESA
                </p>
                <div className="mx-auto max-w-[552px] h-[73px] bg-[#E6EEF7] rounded-lg mt-4 flex items-center justify-center px-4">
                  <img src={Gift} alt="Gift Icon" className="h-6 w-6" />
                  <p className="text-[#0256B2] text-[18px] font-extrabold">
                    Your Reward for this step is 200 WESPoints
                  </p>
                </div>
    
              </div>
    
              {/* Form */}
              <form>
                {/* Institution Name */}
                <div className="mb-4 pt-[40px]">
                  <label className="font-semibold text-[16px] ml-6">
                    Name Of Institution <span className="text-red-500">*</span>
                  </label>
                  <div className="w-full flex justify-center px-5">
                    <select
                      name="institution"
                      value={formData.institution}
                      required
                      onChange={handleChange}
                      className="text-[#7F8184] h-[48px] w-[552px] border rounded-lg px-3 py-2"
                    >
                      <option value="WESOnline">WESOnline</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
    
                {/* Education Level */}
                <div className="mb-4">
                  <label className="font-semibold text-[16px] ml-6">
                    Where are you on your journey <span className="text-red-500">*</span>
                  </label>
                  <div className="w-full flex justify-center px-5">
                    <select
                      name="level"
                      value={formData.level}
                      required
                      onChange={handleChange}
                      className="text-[#7F8184] h-[48px] w-[552px] border rounded-lg px-3 py-2"
                    >
                      <option value="100">100</option>
                      <option value="200">200</option>
                      <option value="300">300</option>
                    </select>
                  </div>
                </div>
    
                {/* Field of Study & GPA */}
                <div className="lg:flex lg:gap-6 w-full px-5">
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-semibold mb-2">
                      Field Of Study <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fieldOfStudy"
                      value={formData.fieldOfStudy}
                      required
                      onChange={handleChange}
                      className="text-[#7F8184] w-full h-[48px] rounded-lg border px-3"
                      placeholder="Chemistry"
                    />
                  </div>
    
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-semibold mb-2">
                      GPA <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="gpa"
                      value={formData.gpa}
                      required
                      onChange={handleChange}
                      className="text-[#7F8184] w-full h-[48px] rounded-lg border px-3 text-center"
                      placeholder="------"
                    />
                  </div>
                </div>
    
                {/* Interests */}
                <div className="mb-4">
                  <label className="font-semibold text-[16px] ml-6">
                    What areas interest you <span className="text-red-500">*</span>
                  </label>
                  <div className="w-full flex justify-center px-5">
                    <select
                      name="interest"
                      value={formData.interest}
                      required
                      onChange={handleChange}
                      className="text-[#7F8184] h-[48px] w-[552px] border rounded-lg px-3 py-2"
                    >
                      <option value="">Select Interest</option>
                      <option value="Business & Management">Business & Management</option>
                      <option value="Technology">Technology</option>
                      <option value="Science">Science</option>
                    </select>
                  </div>
                </div>
    
                {/* Buttons */}
                <div className="flex justify-between items-center w-full px-5 pt-[70px]">
                  <button type="button" className="text-black font-medium">
                    Skip For Now
                  </button>
                  <button
                  
                    type="submit"
                    className="bg-[#0256B2] w-[190px] text-white font-semibold px-8 py-3 rounded-lg"
                    onClick={(e) => {
                      e.preventDefault();  
                      setIsPopupOpen(true);
                    }}
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
            {isPopupOpen && <PopUp isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />}
          </div>
  )
}

export default firstPage
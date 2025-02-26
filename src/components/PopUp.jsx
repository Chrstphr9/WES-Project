import React from 'react'
import WowImage from '../assets/wow.png';
import Gift from '../assets/gift.png';

const popUp = ({isOpen, onClose}) => {
    if (!isOpen) return null;
    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[350px] p-6 rounded-lg shadow-lg text-center">
        {/* WOW Image */}
        <img src={WowImage} alt="Wow" className="mx-auto w-24 h-24 mb-4" />

        {/* Title */}
        <h2 className="text-green-600 text-xl font-bold">Congratulations</h2>
        <p className="text-gray-500 mt-1">You've earned 1000 WESPoints</p>

        {/* Reward Box */}
        <div className="bg-blue-50 rounded-lg p-4 mt-4">
          <p className="text-blue-500 flex items-center justify-center font-semibold text-lg">
            <img src={Gift} alt="Gift Icon" className="h-6 w-6" />
            Your Rewards
          </p>
          <p className="text-black font-bold mt-2">2000 WESPoint Unlocked</p>
          <p className="text-gray-500 text-sm mt-1">
            Want to know your employability status? Take the ESA with your 2000 WESPoints to get started!
          </p>
        </div>

        {/* Take ESA Button */}
        <button className="bg-blue-600 text-white w-full mt-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
          Take ESA
        </button>

        {/* Close Button */}
        <button onClick={onClose} className="mt-2 text-gray-500 text-sm">
          Close
        </button>
      </div>
    </div>
  )
}

export default popUp
import './css/App.css';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [prediction, setPrediction] = useState(true);
  const [locked, setLocked] = useState(false);

  const calculatedPercentage = 50;

  const formatChannelPoints = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    } else {
      return value.toString();
    }
  };

  return (
    <div>
      {prediction !== null && (
        <motion.div initial={{ opacity: 0, animation: 'running', transition: { duration: 1.0 }, }} animate={{ opacity: 1, animation: 'running', transition: { duration: 1.0 } }}>
          <div className="absolute top-20 left-20 p-4 bg-black bg-opacity-0 text-white text-base max-w-lg w-full animate-fade-in">
            {/* Totals */}
            <div className="text-right flex justify-end">
              <h1 className="text-2xl text-white font-bold flex items-center"><svg width="24" height="24" fill="#ffffff" viewBox="0 0 20 20" className="mr-1"><path d="M10 6a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2V6z"></path><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" clip-rule="evenodd"></path></svg>{formatChannelPoints(2000000)}</h1>
              <h1 className="text-2xl text-white font-bold pl-5 flex items-center"><svg type="color-fill-current" fill="#ffffff" className="mr-1 ScSvg-sc-1hrsqw6-1 hdNNzQ" width="24px" height="24px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" d="M7 2a4 4 0 00-1.015 7.87c-.098.64-.651 1.13-1.318 1.13A2.667 2.667 0 002 13.667V18h2v-4.333c0-.368.298-.667.667-.667.908 0 1.732-.363 2.333-.953.601.59 1.425.953 2.333.953.369 0 .667.299.667.667V18h2v-4.333A2.667 2.667 0 009.333 11c-.667 0-1.22-.49-1.318-1.13A4.002 4.002 0 007 2zM5 6a2 2 0 104 0 2 2 0 00-4 0z" clip-rule="evenodd"></path><path d="M14 11.83V18h4v-3.75c0-.69-.56-1.25-1.25-1.25a.75.75 0 01-.75-.75v-.42a3.001 3.001 0 10-2 0z"></path></g></svg>{formatChannelPoints(6000)}</h1>
            </div>

            {/* Title */}
            <div className="text-right flex justify-end">
              <h1 className="text-2xl text-white font-bold flex items-center italic">Will Streamer win this game?</h1>
            </div>

            {/* Outcome Progress Bars */}
            <div className="flex mt-2 w-full">
              <h1 className="text-2xl text-white font-bold flex items-center"><svg width="24" height="24" fill="#ffffff" viewBox="0 0 20 20" className="mr-1"><path d="M10 6a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2V6z"></path><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" clip-rule="evenodd"></path></svg>{formatChannelPoints(100000)}</h1>
              <h1 className="text-2xl text-white font-bold pl-5 flex items-center"><svg type="color-fill-current" fill="#ffffff" className="mr-1 ScSvg-sc-1hrsqw6-1 hdNNzQ" width="24px" height="24px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" d="M7 2a4 4 0 00-1.015 7.87c-.098.64-.651 1.13-1.318 1.13A2.667 2.667 0 002 13.667V18h2v-4.333c0-.368.298-.667.667-.667.908 0 1.732-.363 2.333-.953.601.59 1.425.953 2.333.953.369 0 .667.299.667.667V18h2v-4.333A2.667 2.667 0 009.333 11c-.667 0-1.22-.49-1.318-1.13A4.002 4.002 0 007 2zM5 6a2 2 0 104 0 2 2 0 00-4 0z" clip-rule="evenodd"></path><path d="M14 11.83V18h4v-3.75c0-.69-.56-1.25-1.25-1.25a.75.75 0 01-.75-.75v-.42a3.001 3.001 0 10-2 0z"></path></g></svg>{formatChannelPoints(3000)}</h1>
              <h1 className="text-2xl text-white font-bold pl-5 flex items-center pr-5"><svg type="color-fill-current" fill="#ffffff" width="24px" height="24px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScSvg-sc-1hrsqw6-1 hdNNzQ"><g><path fill-rule="evenodd" d="M5 10h.1A5.006 5.006 0 009 13.9V16H7v2h6v-2h-2v-2.1a5.006 5.006 0 003.9-3.9h.1a3 3 0 003-3V4h-3V2H5v2H2v3a3 3 0 003 3zm2-6h6v5a3 3 0 11-6 0V4zm8 2v2a1 1 0 001-1V6h-1zM4 6h1v2a1 1 0 01-1-1V6z" clip-rule="evenodd"></path></g></svg>1.5X</h1>

              {/* Option Name */}
              <h1 className="text-2xl text-white font-bold flex-grow text-right whitespace-nowrap">
                Win
              </h1>
            </div>
            <div className="w-full bg-gray-600 h-14 mt-1 rounded-2xl border-8 border-white">
              <div className="flex flex-row-reverse">
                <motion.div
                  className="bg-[#0dd9a5] h-10 rounded-l-2xl"
                  initial={{ width: 0 }}
                  animate={{ width: `${calculatedPercentage}%` }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
            </div>

            <div className="flex mt-2 w-full">
              <h1 className="text-2xl text-white font-bold flex items-center"><svg width="24" height="24" fill="#ffffff" viewBox="0 0 20 20" className="mr-1"><path d="M10 6a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2V6z"></path><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" clip-rule="evenodd"></path></svg>{formatChannelPoints(100000)}</h1>
              <h1 className="text-2xl text-white font-bold pl-5 flex items-center"><svg type="color-fill-current" fill="#ffffff" className="mr-1 ScSvg-sc-1hrsqw6-1 hdNNzQ" width="24px" height="24px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" d="M7 2a4 4 0 00-1.015 7.87c-.098.64-.651 1.13-1.318 1.13A2.667 2.667 0 002 13.667V18h2v-4.333c0-.368.298-.667.667-.667.908 0 1.732-.363 2.333-.953.601.59 1.425.953 2.333.953.369 0 .667.299.667.667V18h2v-4.333A2.667 2.667 0 009.333 11c-.667 0-1.22-.49-1.318-1.13A4.002 4.002 0 007 2zM5 6a2 2 0 104 0 2 2 0 00-4 0z" clip-rule="evenodd"></path><path d="M14 11.83V18h4v-3.75c0-.69-.56-1.25-1.25-1.25a.75.75 0 01-.75-.75v-.42a3.001 3.001 0 10-2 0z"></path></g></svg>{formatChannelPoints(3000)}</h1>
              <h1 className="text-2xl text-white font-bold pl-5 flex items-center"><svg type="color-fill-current" fill="#ffffff" width="24px" height="24px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScSvg-sc-1hrsqw6-1 hdNNzQ"><g><path fill-rule="evenodd" d="M5 10h.1A5.006 5.006 0 009 13.9V16H7v2h6v-2h-2v-2.1a5.006 5.006 0 003.9-3.9h.1a3 3 0 003-3V4h-3V2H5v2H2v3a3 3 0 003 3zm2-6h6v5a3 3 0 11-6 0V4zm8 2v2a1 1 0 001-1V6h-1zM4 6h1v2a1 1 0 01-1-1V6z" clip-rule="evenodd"></path></g></svg>1.5X</h1>

              {/* Option Name */}
              <h1 className="text-2xl text-white font-bold flex-grow text-right whitespace-nowrap">
                Loss
              </h1>
            </div>
            <div className="w-full bg-gray-600 h-14 mt-1 rounded-2xl border-8 border-white">
              <div className="flex flex-row-reverse">
                <motion.div
                  className="bg-[#a11e15] h-10 rounded-l-2xl"
                  initial={{ width: 0 }}
                  animate={{ width: `${calculatedPercentage}%` }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
            </div>

            {locked && (
              <motion.div initial={{ opacity: 0, animation: 'backwards', transition: { duration: .5 }, }} animate={{ opacity: 1, animation: 'backwards', transition: { duration: .5 } }}>
                <div className="flex mt-1 w-full">
                  <h1 className="text-lg font-bold text-white flex-grow text-right whitespace-nowrap">Prediction Closed</h1>
                </div>
              </motion.div>
            )}

            {locked === false && (
              <motion.div initial={{ opacity: 1, animation: 'backwards', transition: { duration: .5 }, }} animate={{ opacity: 0, animation: 'backwards', transition: { duration: .5 } }}>
                <div className="flex mt-1 w-full">
                  <h1 className="text-lg font-bold text-white flex-grow text-right whitespace-nowrap">Prediction Closed</h1>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {/* No Prediction */}
      {prediction === null && (
        <motion.div initial={{ opacity: 1, animation: 'backwards', transition: { duration: 1.0 }, }} animate={{ opacity: 0, animation: 'backwards', transition: { duration: 1.0 } }}>
          <div className="absolute top-20 left-20 p-4 bg-black bg-opacity-0 text-white text-base max-w-lg w-full animate-fade-in">
            {/* Totals */}
            <div className="text-right flex justify-end">
              <h1 className="text-2xl text-white font-bold flex items-center"><svg width="24" height="24" fill="#ffffff" viewBox="0 0 20 20" className="mr-1"><path d="M10 6a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2V6z"></path><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" clip-rule="evenodd"></path></svg>8.6M</h1>
              <h1 className="text-2xl text-white font-bold pl-5 flex items-center"><svg type="color-fill-current" fill="#ffffff" className="mr-1 ScSvg-sc-1hrsqw6-1 hdNNzQ" width="24px" height="24px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" d="M7 2a4 4 0 00-1.015 7.87c-.098.64-.651 1.13-1.318 1.13A2.667 2.667 0 002 13.667V18h2v-4.333c0-.368.298-.667.667-.667.908 0 1.732-.363 2.333-.953.601.59 1.425.953 2.333.953.369 0 .667.299.667.667V18h2v-4.333A2.667 2.667 0 009.333 11c-.667 0-1.22-.49-1.318-1.13A4.002 4.002 0 007 2zM5 6a2 2 0 104 0 2 2 0 00-4 0z" clip-rule="evenodd"></path><path d="M14 11.83V18h4v-3.75c0-.69-.56-1.25-1.25-1.25a.75.75 0 01-.75-.75v-.42a3.001 3.001 0 10-2 0z"></path></g></svg>800</h1>
            </div>

            {/* Title */}
            <div className="text-right flex justify-end">
              <h1 className="text-2xl text-white font-bold flex items-center italic">Will Jynxzi win this 1v1?</h1>
            </div>

            {/* Outcome Progress Bars */}
            <div className="flex mt-2 w-full">
              <h1 className="text-2xl text-white font-bold flex items-center"><svg width="24" height="24" fill="#ffffff" viewBox="0 0 20 20" className="mr-1"><path d="M10 6a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2V6z"></path><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" clip-rule="evenodd"></path></svg>2.4M</h1>
              <h1 className="text-2xl text-white font-bold pl-5 flex items-center"><svg type="color-fill-current" fill="#ffffff" className="mr-1 ScSvg-sc-1hrsqw6-1 hdNNzQ" width="24px" height="24px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" d="M7 2a4 4 0 00-1.015 7.87c-.098.64-.651 1.13-1.318 1.13A2.667 2.667 0 002 13.667V18h2v-4.333c0-.368.298-.667.667-.667.908 0 1.732-.363 2.333-.953.601.59 1.425.953 2.333.953.369 0 .667.299.667.667V18h2v-4.333A2.667 2.667 0 009.333 11c-.667 0-1.22-.49-1.318-1.13A4.002 4.002 0 007 2zM5 6a2 2 0 104 0 2 2 0 00-4 0z" clip-rule="evenodd"></path><path d="M14 11.83V18h4v-3.75c0-.69-.56-1.25-1.25-1.25a.75.75 0 01-.75-.75v-.42a3.001 3.001 0 10-2 0z"></path></g></svg>400</h1>
              <h1 className="text-2xl text-white font-bold pl-5 flex items-center pr-5"><svg type="color-fill-current" fill="#ffffff" width="24px" height="24px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScSvg-sc-1hrsqw6-1 hdNNzQ"><g><path fill-rule="evenodd" d="M5 10h.1A5.006 5.006 0 009 13.9V16H7v2h6v-2h-2v-2.1a5.006 5.006 0 003.9-3.9h.1a3 3 0 003-3V4h-3V2H5v2H2v3a3 3 0 003 3zm2-6h6v5a3 3 0 11-6 0V4zm8 2v2a1 1 0 001-1V6h-1zM4 6h1v2a1 1 0 01-1-1V6z" clip-rule="evenodd"></path></g></svg>1.5X</h1>

              {/* Option Name */}
              <h1 className="text-2xl text-white font-bold flex-grow text-right whitespace-nowrap">
                Win
              </h1>
            </div>
            <div className="w-full bg-gray-600 h-14 mt-1 rounded-2xl border-8 border-white">
              <div className="flex flex-row-reverse">
                <motion.div
                  className="bg-[#0dd9a5] h-10 rounded-l-2xl"
                  initial={{ width: `${calculatedPercentage}%` }}
                  animate={{ width: 0 }}
                  transition={{ duration: 1.0 }}
                ></motion.div>
              </div>
            </div>

            <div className="flex mt-2 w-full">
              <h1 className="text-2xl text-white font-bold flex items-center"><svg width="24" height="24" fill="#ffffff" viewBox="0 0 20 20" className="mr-1"><path d="M10 6a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2V6z"></path><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" clip-rule="evenodd"></path></svg>600K</h1>
              <h1 className="text-2xl text-white font-bold pl-5 flex items-center"><svg type="color-fill-current" fill="#ffffff" className="mr-1 ScSvg-sc-1hrsqw6-1 hdNNzQ" width="24px" height="24px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" d="M7 2a4 4 0 00-1.015 7.87c-.098.64-.651 1.13-1.318 1.13A2.667 2.667 0 002 13.667V18h2v-4.333c0-.368.298-.667.667-.667.908 0 1.732-.363 2.333-.953.601.59 1.425.953 2.333.953.369 0 .667.299.667.667V18h2v-4.333A2.667 2.667 0 009.333 11c-.667 0-1.22-.49-1.318-1.13A4.002 4.002 0 007 2zM5 6a2 2 0 104 0 2 2 0 00-4 0z" clip-rule="evenodd"></path><path d="M14 11.83V18h4v-3.75c0-.69-.56-1.25-1.25-1.25a.75.75 0 01-.75-.75v-.42a3.001 3.001 0 10-2 0z"></path></g></svg>400</h1>
              <h1 className="text-2xl text-white font-bold pl-5 flex items-center"><svg type="color-fill-current" fill="#ffffff" width="24px" height="24px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScSvg-sc-1hrsqw6-1 hdNNzQ"><g><path fill-rule="evenodd" d="M5 10h.1A5.006 5.006 0 009 13.9V16H7v2h6v-2h-2v-2.1a5.006 5.006 0 003.9-3.9h.1a3 3 0 003-3V4h-3V2H5v2H2v3a3 3 0 003 3zm2-6h6v5a3 3 0 11-6 0V4zm8 2v2a1 1 0 001-1V6h-1zM4 6h1v2a1 1 0 01-1-1V6z" clip-rule="evenodd"></path></g></svg>1.5X</h1>

              {/* Option Name */}
              <h1 className="text-2xl text-white font-bold flex-grow text-right whitespace-nowrap">
                Loss
              </h1>
            </div>
            <div className="w-full bg-gray-600 h-14 mt-1 rounded-2xl border-8 border-white">
              <div className="flex flex-row-reverse">
                <motion.div
                  className="bg-[#a11e15] h-10 rounded-l-2xl"
                  initial={{ width: `${calculatedPercentage}%` }}
                  animate={{ width: 0 }}
                  transition={{ duration: 1.0 }}
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;

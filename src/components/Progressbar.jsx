import React from "react";
import "../components/progressbar.css";

function Progressbar() {
  return (
    // <div className="progresbar_div">
    //   <div className="progress-container">

    //     <div className="progress-bar">
    //       <div className="progress-fill" style={{ width: '50%' }}>Progress 1</div>
    //     </div>

    //     <div className="progress-bar">
    //       <div className="progress-fill" style={{ width: '60%' }}>Progress 2</div>
    //     </div>

    //     <div className="progress-bar">
    //       <div className="progress-fill" style={{ width: '80%' }}>Progress 3</div>
    //     </div>

    //     <div className="progress-bar">
    //       <div className="progress-fill" style={{ width: '70%' }}>Progress 4</div>
    //     </div>

    //     <div className="progress-bar">
    //       <div className="progress-fill" style={{ width: '90%' }}>Progress 4</div>
    //     </div>

    //     <div className="progress-bar">
    //       <div className="progress-fill" style={{ width: '100%' }}>Progress 4</div>
    //     </div>

    //     <div className="progress-bar">
    //       <div className="progress-fill" style={{ width: '90%' }}>Progress 4</div>
    //     </div>

    //   </div>
    // </div>

    <>
      <div>
        <div className="w-full bg-gray-50/90 h-6    dark:bg-gray-700">
          <div
            className="bg-blue-400 h-6 text-white flex items-center justify-center"
            style={{ width: "80%" }}
          >
            85%
          </div>
        </div>
        <div className="w-full bg-gray-50/90 h-6    dark:bg-gray-700">
          <div
            className="bg-pink-400 h-6 text-white flex items-center justify-center"
            style={{ width: " 80%" }}
          >
          80%
          </div>
        </div>
        <div className="w-full bg-gray-50/90 h-6    dark:bg-gray-700">
          <div
            className="bg-green-300 h-6 text-white flex items-center justify-center"
            style={{ width: "70%" }}
          >
             70%
          </div>
        </div>
        <div className="w-full bg-gray-50/90 h-6    dark:bg-gray-700">
          <div
            className="bg-yellow-200 h-6 flex items-center justify-center"
            style={{ width: "50%" }}
          >
            50%
          </div>
        </div>
        <div className="w-full bg-gray-50/90 h-6    dark:bg-gray-700">
          <div
            className="bg-blue-300 h-6 text-white flex items-center justify-center"
            style={{ width: "56%" }}
          >
            45%
          </div>
        </div>
        <div className="w-full bg-gray-50/90 h-6 dark:bg-gray-700">
          <div
            className="bg-green-800 h-6 text-white flex items-center justify-center"
            style={{ width: "45%" }}
          >
            45%
          </div>
        </div>
      </div>
    </>
  );
}

export default Progressbar;

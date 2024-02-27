import React, { useState } from "react";
import "./App.css";

function App() {


  return (
 
      <div className="fixed flex justify-center z-50 top-0 left-0 w-full  p-4">
        <nav className=" bg-yellow-600 text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20  border border-gray-400 flex justify-center">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <div className="flex space-x-4">
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="font-bold text-white">Brand Name</span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 "
                >
                  Features
                </a>
                <a
                  href="#"
                  className="py-5 px-3 "
                >
                  Pricing
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {" "}
              {/* Adjusted gap */}
              <a href="" className="py-5 px-3">
                Login
              </a>
              <a
                href=""
                className="text-white py-2 px-3 bg-yellow-400 hover:bg-yellow-300  rounded transition duration-300"
              >
                Signup
              </a>
            </div>
          </div>

        </nav>
      </div>
    
  );
}

export default App;

"use client"

// import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { useState } from "react";
import Mycontext from "./Context/context"

import { useContext } from "react";

export default function AppError() {
  const successColor = " bg-green-600 "
  const errorColor = " bg-red-600 "


  const myCont = useContext(Mycontext)


  const {
    errorType,
    errorMessage,
    setError,
    AlertShow,
    setAlertShow
  } = myCont

 




  const finalBgColor = errorType == "success" ? successColor : errorType == "error" ? errorColor : " bg-yellow-600 ";

  return (
    <>
      {AlertShow &&
        (< div className={`absolute lg:w-3/12  md:w-4/12 sm:10/12 ${finalBgColor} m-5 float-right pb-5 pt-3 right-px px-5   shadow-xl rounded-md shadow-md text-gray-700 `} >
          < div className=''>

            <div className='flex flex-row justify-between space-x-3'>
              <div className="flex flex-row items-center  space-x-3">
                <div>
                  {
                    errorType == "success" ?
                      <FiCheckCircle className="text-green-1000" />
                      :
                      errorType == "error" ?
                        <MdErrorOutline className="text-gray-900" />
                        : null
                  }

                </div>
                <span className="font-bold text-white">{errorType}</span>
              </div>
              <div className="cursor-pointer flex justify-center text-black items-center" onClick={() => setAlertShow(false)}>
                <IoMdClose />
              </div>
            </div>

            <div className="mt-2 text-green-100">
              {errorMessage}
            </div>


          </div>
        </div >)
      }
    </>
  )
}



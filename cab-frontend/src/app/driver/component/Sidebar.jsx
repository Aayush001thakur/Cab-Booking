"use client"

import React, { useEffect, useState } from 'react'

export default function Sidebar() {
    const [selectedVehicle, setSelectedVehicle] = useState([])
    const [vehicleType, setVehicleType] = useState(["car", "bike", "auto", "van", "truck", "other"])

    function SelectedHandle(val, myhandler) {
        myhandler(
            (prev) => {
                return (prev.includes(val) ? prev.filter((ght) => (ght != val)) : [...prev, val])
            })
    }


    useEffect(() => {

        console.log({ selectedVehicle })
    }, [selectedVehicle, setSelectedVehicle])

    function test() {
        return <h1>helo test</h1>
    }
    return (
        <div className='h-full w-full bg-white rounded-md border lg:p-3'>
            <div className='w-full  border-b border-b-gray-300 lg:p-2'>
                <div className='flex justify-between items-center w-full' >
                    <h1 className='text-md'>Filters</h1>
                    <button className='border-1 text-gray-700 bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200'>
                        Clear All
                    </button>
                </div>
            </div>
            <div className='border-b border-b-gray-300 py-3'>
                <h1 className='p-2  text-sm'>Vehicle</h1>
                <div className=' space-x-2 space-y-2 p-1 text-sm' >
                    {
                        vehicleType.map((vehicle, ind) => {
                            let gh = selectedVehicle.includes(vehicle) ?
                                " bg-blue-800 text-white " :
                                null;
                            return (
                                <button
                                    onClick={() => SelectedHandle(vehicle, setSelectedVehicle)}
                                    className={`px-2 py-1 rounded-md border hover:bg-blue-800  hover:text-white border-gray-200 ${gh}`}
                                >{vehicle}</button>
                            )
                        })
                    }


                </div>
            </div>

            <div className='border-b border-b-gray-300 py-3'>
                <h1 className='p-2  text-sm'>Available sits</h1>
                <div className=' space-x-2 space-y-2 p-1 text-sm' >
                    {
                        Array(5).fill(0).map((item, ind) => {
                            // let gh = selectedVehicle.includes(vehicle) ?
                            //     " bg-blue-800 text-white " :
                            //     null;
                            return (
                                <button
                                    onClick={() => SelectedHandle(vehicle, setSelectedVehicle)}
                                    className={`px-2 py-1 rounded-md border hover:bg-blue-800  hover:text-white border-gray-200 `}
                                >{ind+1}</button>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

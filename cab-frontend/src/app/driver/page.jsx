"use client"
import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

import DriverCard from "./component/driverCard"
import Navbar from './component/navbar'
import Sidebar from "./component/Sidebar"

import SearchBar from "./component/searchBar"


const initialData = [
    {
        "disbursedAt": {
            "hour": 1,
            "minute": 30,
            "meridiem": "AM"
        },
        "ariveAt": {
            "day": 1,
            "hour": 15,
            "minute": 14
        },
        "from": {
            "country": "india",
            "state": "uttar pradesh",
            "city": "meerut",
            "address": "kanker kheera"
        },
        "to": {
            "country": "india",
            "state": "uttar pradesh",
            "city": "noida",
            "address": "noida 62, noida one"
        },
        "availableSits": 0,
        "_id": "6599730491f32d4b56eaedfe",
        "user": {
            "_id": "65994272cee9228e5c85e638",
            "name": "gautam"
        },
        "isEnable": true,
        "price": 150,
        "currency": "INR",
        "profileCompleted": true,
        "description": "string",
        "vehicle": "car",
        "vehicleDetails": "string",
        "days": [
            "monday",
            "tuesday"
        ],
        "license": true,
        "createdAt": "2024-01-06T15:34:28.043Z",
        "updatedAt": "2024-01-06T16:24:41.479Z",
        "__v": 0
    }
]


export default function page() {

    const [showSearchBar, setShowSearchBar] = useState(false)
    const [suggestionWhere, setSuggestionWhere] = useState("to")
    

    const [fromInput,setFromInput]=useState("")
    const [toInput,setToInput]=useState("")


    const [Drivers, setDrivers] = useState(initialData)
    
    function addInputFieldvalue(value){
       if(suggestionWhere=="to"){
        setToInput(()=>value)
       }else{
        setFromInput(()=>value)
       }
    }

    function suggetionBarHandler(where){
        setSuggestionWhere(()=>where)

        setShowSearchBar(()=>true)
    }

    return (
        <div className='bg-gray-100'>
            {/* for search bar */}
            
            {
                showSearchBar && (
                    <SearchBar where={suggestionWhere}  setShowSearchBar={setShowSearchBar} addInputFieldvalue={addInputFieldvalue}/>
                )
            }


            {/* for search bar */}

            <div>
                <Navbar />
            </div>

            <div className='w-full  bg-white mt-1 py-2  px-3 lg:flex lg:space-x-3 border'>
                <div className=' w-1/3'>
                    <label htmlFor="" className='text-sm text-gray-500 px-1'>From </label>
                    <div className='flex w-full flex-row border rounded-md overflow-hidden'>
                        <div className='flex justify-center items-center px-1.5'>
                            <CiLocationOn className='text-xl' />
                        </div>
                        <div className='w-full'>
                            <input type="text" name="" id="" value={fromInput}  onClick={()=>suggetionBarHandler("from")} placeholder='meerut ,uttar pradesh ,india' className='outline-0 w-11/12 h-full px-2 py-1.5 border-0 w-full' />

                        </div>
                    </div>
                </div>
                <div className=' w-1/3'>
                    <label htmlFor="" className='text-sm text-gray-500 px-1'>To </label>
                    <div className='flex w-full flex-row border rounded-md overflow-hidden'>
                        <div className='flex justify-center items-center px-1.5'>
                            <CiLocationOn className='text-xl' />
                        </div>
                        <div className='w-full'>
                            <input type="text" name="" id="" value={toInput}  onClick={()=>suggetionBarHandler("to")} placeholder='meerut ,uttar pradesh ,india' className='outline-0 w-11/12 h-full px-2 py-1.5 border-0 w-full' />
                        </div>
                    </div>
                </div>
                <div className=' w-1/3'>
                    <label htmlFor="" className='text-sm text-gray-500 px-1'>Date</label>
                    <div className='flex w-full flex-row border rounded-md overflow-hidden'>
                        <div className='w-full'>
                            <input type="date" name="" id="" placeholder='meerut ,uttar pradesh ,india' className='outline-0 w-11/12 h-full px-2 py-1.5 border-0 w-full ' />
                        </div>
                        <div className='flex justify-center items-center px-1.5'>
                            <SlCalender className='text-xl' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-screen lg:flex lg:flex-row p-3 space-x-3'>

                <div className='lg:w-1/5'>
                    <Sidebar />
                </div>
                <div className=' lg:w-4/5'>
                    {
                        Drivers.map((driver) => (
                            <DriverCard driver={driver} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

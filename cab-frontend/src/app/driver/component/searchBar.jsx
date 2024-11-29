import React, { useState } from 'react'


import axios from 'axios';

import CONFIG from "@/app/config/config"

import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
export default function searchBar({ where = "to" ,setShowSearchBar,addInputFieldvalue}) {

    const [addressSuggetion, setAddressSuggestion] = useState([])

    const [addressInput, setAddressInput] = useState("")
    
    function ChooseAddress(value){
        addInputFieldvalue(value)
        setShowSearchBar(()=>false)

    }

    function handleInput(e) {
        let inputvalue = e.target.value
        setAddressInput((pv) => inputvalue)
        if (addressInput.trim().length >= 2) {
            getAddressSuggestion(where, addressInput)
        }

    }

    async function getAddressSuggestion(where, query) {
        let reqObject = {
            method: "GET",
            url: `${CONFIG.BACKEND.baseUrl}${CONFIG.BACKEND.getAddressSuggestion}?where=${where}&query=${query}`
        }

        axios.request(reqObject)
            .then(({ data: responeData }) => {
                setAddressSuggestion(() => responeData.data)
                console.log(responeData.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div className=' fixed  z-10 bg-[#00000069]  w-full h-full '>
            <div className="flex justify-center h-full w-full  ">
                <div className='mt-7 lg:w-1/2'>
                    <div className="rounded-xl bg-black p-3 w-full">
                        <div className='w-full flex'>
                            <div className='w-full flex overflow-hidden rounded-xl flex-row justify-between items-center bg-gray-800'>
                                <div className='px-2'>
                                    <FaLocationDot className='text-white' />
                                </div>
                                <input type="text" name="" id="" value={addressInput} onInput={handleInput} className=' py-2 px-3 text-white font-bold bg-transparent lg:w-11/12' />
                                <button className='bg-white w-1/12 px-3  py-2 h-full'>
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='py-3'>
                                {addressSuggetion.length >0 &&
                                    addressSuggetion.map((address) => {
                                        return (

                                            <div className='bg-zinc-900 rounded-md p-2' onClick={()=>ChooseAddress(address.address)}>
                                                <div className='text-white font-bold '>
                                                    <h5>{address.address}</h5>
                                                </div>
                                                <div className='text-slate-500 font-medium text-md'>
                                                    {address.country} , {address.state}, {address.city}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    addressSuggetion.length ==0 &&(
                                        <div className='text-white'>write atlease 3 charater</div>

                                    )
                                }

                            </div>
                            <div className='text-gray-500 mt-3 flex lg:flex-row justify-around'>
                                <button>#noida</button>
                                <button>#meerut</button>
                                <button> #lucknow</button>
                                <button>#banglore</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

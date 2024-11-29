"use client"




import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

import { useState, useContext, useEffect } from "react";


import authContext from "../../Context/Authentication/authContext";



export default function page() {
    const AuthCon = useContext(authContext)
    const { getMyProfile } = AuthCon
    async function myProfile() {
        const user = await getMyProfile()
        console.log("fetched from context in myprofile page.jsx")
        console.log({ user })
    }
    useEffect(() => {
        myProfile()

    }, [])
    const [Profile, setProfile] = useState({})

    return (
        <div className=" px-5 pb-5 ">
            <div className="flex lg:flex-row p-6 bg-white shadow-xl rounded-xl">
                <div className="rounded-full border-1 bg-gray-300 border-1 border-gray-500 h-36 w-36 ">

                </div>
                <div className="p-4">
                    Manish
                </div>
            </div>

            <div className="w-full mt-5">
                <div className="flex lg:flex-row justify-between bg-white shadow-xl  rounded-xl p-5">

                    <div className="w-5/12 flex justify-center  items-center flex-col ">
                        <div className="flex flex-row items-center w-full space-x-2 ">

                            <FaLocationDot />  <label htmlFor="">from</label>
                        </div>
                        <div className=" text-white font-bold w-full bg-black rounded-xl mt-3  p-3 ">
                            <div className="space-x-2 ">
                                <span>india</span>,
                                <span>uttar pradesh </span>,
                                <span>meerut</span>
                            </div>
                            <div className="">
                                <span> kanker khera meerut </span>
                            </div>
                        </div>

                    </div>

                    <div className="w-2/12 flex flex-col justify-end items-center">
                        <div className="p-5 w-full">
                            <div className="w-full flex flex-row justify-center items-center">
                                <div className="border-b-4 border-l-4 border-b-slate-400 border-l-slate-400 h-4 w-4 rotate-45">

                                </div>
                                <div className="rounded-xl border-2 border-slate-400 w-10/12 ">

                                </div>

                            </div>
                            <div className="w-full flex flex-row justify-center items-center mt-2">
                                <div className="rounded-xl border-2 border-slate-400 w-10/12">

                                </div>
                                <div className="border-t-4 border-r-4 border-t-slate-400 border-r-slate-400 h-4 w-4 rotate-45">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-5/12 flex justify-center  items-center flex-col ">
                        <div className="flex flex-row items-center  w-full space-x-2 p-3">

                            <FaLocationDot />  <label htmlFor="">to</label>
                        </div>
                        <div className=" bg-slate-900 text-white  w-full rounded-xl p-3 font-bold">
                            <div className="space-x-2 ">
                                <span>india</span>,
                                <span>uttar pradesh </span>,
                                <span>meerut</span>
                            </div>
                            <div className="">
                                <span> noida 62 noida one tower </span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* timing  */}
                <div className="flex lg:flex-row justify-between mt-5 space-x-5 ">
                    <div className="w-1/2 bg-white shadow-xl rounded-xl p-5">
                        <label htmlFor="">Disbursed at</label>
                        <div
                            className="bg-white flex flex-row items-center space-x-5 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300   sm:text-sm sm:leading-6"
                        >
                            <FaRegClock />
                            <span>
                                7:30 AM
                            </span>
                        </div>
                    </div>
                    <div className="w-1/2 bg-white shadow-xl rounded-xl p-5">
                        <label htmlFor="">Arive in </label>
                        <div
                            className="bg-white flex flex-row items-center space-x-5 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300   sm:text-sm sm:leading-6"
                        >
                            <FaRegClock />
                            <span>
                                2 hours 20 min
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col bg-white shadow-xl rounded-xl p-5  mt-5 ">
                    <div>
                        vehicle
                    </div>

                    <div className="flex flex-row space-x-5 mt-3">
                        <div className="bg-white py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
                            CAR
                        </div>
                        <div className="bg-white py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
                            ECO
                        </div>
                        <div className="bg-white py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
                            BUS
                        </div>
                    </div>

                </div>


                {/*  */}

                <div className="w-full  mt-5 space-y-5 bg-white shadow-xl rounded-xl p-5">
                    <div className="flex flex-row items-center space-x-2">
                        <SlCalender />
                        <h2>DAYS</h2>
                    </div>

                    <div className="flex xl:flex-row flex-wrap space-x-5  space-y-3">
                        <div className="bg-white py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
                            SUNDAY
                        </div>
                        <div className="bg-white py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
                            MONDAY
                        </div>
                        <div className="bg-white py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
                            TUESDAY
                        </div>
                        <div className="bg-white py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
                            WEDNESDAY
                        </div>
                        <div className="bg-white py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
                            THURDAY
                        </div>
                        <div className="bg-white py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
                            FRIDAY
                        </div>
                        <div className="bg-white py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
                            SATURDAY
                        </div>

                    </div>

                </div>

            </div>
        </div>


    )
}

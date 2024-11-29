"use client"

import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import Link from 'next/link';
import { AiOutlineSchedule } from "react-icons/ai";

export default function Sidebar() {
  return (
    <div className='w-full h-full'>

      <div className='bg-[#181d15]  h-full w-full p-5'>

        <div className="py-5"></div>

        <ul className='text-white w-full  space-y-4 text-md '>

          <li>
            <Link href={"/dashboard"} className='ps-3 py-1.5 cursor-pointer hover:bg-[#343a46] rounded-md flex flex-row   items-center  space-x-2'>

              <MdSpaceDashboard />
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link href={"/dashboard/profile"} className='ps-3 py-1.5 cursor-pointer hover:bg-[#343a46] rounded-md flex flex-row   items-center  space-x-2'>

              <LuUser2 />
              <span>My Profile</span>
            </Link>
          </li>


          <li >

            <Link href={""} className='ps-3 py-1.5 cursor-pointer hover:bg-[#343a46] rounded-md flex flex-row   items-center  space-x-2'>

              <AiOutlineSchedule />
              <span>Bookings</span>
            </Link>
          </li>

          {/* <li></li>
            <li></li> */}
        </ul>
      </div>

    </div >
  )
}

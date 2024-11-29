"use client"

import Link from 'next/link'
import React from 'react'

export default function page() {
    async function forgotPassword(e: { preventDefault: () => void }) {
         e.preventDefault()

    }
    return (
        <div className='w-full h-screen'>
            <div className='h-full bg-gray-100  flex justify-center items-center'>
                <div className=' w-full md:w-1/3 lg:w-1.5/4 '>
                     <h2 className='font-medium text-2xl text-center '>Reset you password</h2>
                    <form className="mt-3 shadow-md bg-white p-5 rounded-md ">
                        <div className='flex flex-col '>
                            <label htmlFor="email" className='font-medium '>enter your email.</label>
                            <input type="email" name="" id="" placeholder='xyz@gmail.com'  className='p-2 mt-2 ring-1 ring-inset ring-gray-400 rounded-md'/>
                        </div>
                        <div className='mt-5'>
                            <button className='w-full bg-blue-500 text-white py-1.5 rounded-md'> Reset Password</button>
                        </div>

                    </form>
                    <div className='mt-5 flex justify-around px-3 '>
                        <Link href="/login" className='font-medium text-lg text-blue-800'>Login   </Link>
                        <span>or</span>
                        <Link href="/register" className='font-medium text-lg text-blue-800'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function Navbar() {
    return (
        <header class="text-gray-600 body-font bg-white shadow-md h-full">
            <div class="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span class="ml-3 text-xl">Vahan</span>
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-gray-900">Home</a>
                    <a class="mr-5 hover:text-gray-900">About us</a>
                    {/* <a class="mr-5 hover:text-gray-900">Third Link</a>
                    <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
                </nav>
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Login
                </button>
            </div>
        </header>
    )
}

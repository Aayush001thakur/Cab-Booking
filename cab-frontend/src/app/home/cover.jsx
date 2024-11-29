import React from 'react'

export default function Cover() {
    return (
        <div>
            <div className="h-screen flex flex-col lg:flex-row">
                <div className=' h-ful sm:h-50 sm:w-full text-center lg:w-1/2'>
                    <h1 className='text-6xl font-bold
                     mt-8'>
                        Dont't wait for taxi
                    </h1>
                </div>
                <div className='h-full sm:h-50 bg-[url(/home/car.png)] bg-no-repeat bg-center sm:w-full lg:w-1/2'>
                    
                </div>
            </div>
        </div>
    )
}

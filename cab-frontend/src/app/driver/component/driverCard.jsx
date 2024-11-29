import React from 'react'

function capitalize(myString) {
    return
}

export default function DriverCard({ driver }) {
    return (
        <div className=' shadow-md rounded-md  bg-white  p-3'>
            <div className='flex justify-between p-2'>
                <div className='capitalize'>{driver.user.name}</div>
                <div className='text-xl'> 
                 <span> {driver.price} </span>  
                     <sub>{driver.currency}</sub>
                 </div>
            </div>
            <div className='flex p-2'>
                <div className='w-1/4 text-start uppercase'>
                    from
                </div>
                <div className='w-3/4 capitalize'>
                    {driver.from.city}
                </div>
            </div>
            <div className='flex p-2'>
                <div className='w-1/4 text-start uppercase'>
                    to
                </div>
                <div className='w-3/4 capitalize'>
                    {driver.to.city}
                </div>
            </div>
        </div>
    )
}

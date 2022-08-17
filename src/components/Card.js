import React from 'react'
import { ArchiveIcon, ArrowsExpandIcon, ClipboardIcon } from '@heroicons/react/outline'

function Card({ price, city, address, img }) {
    return (
        <div className='bg-white rounded-md overflow-hidden shadow-md 
        cursor-pointer hover:shadow-xl hover:scale-105'>

            <img src={img} />
            
                <div className='flex items-center mx-4 mt-6'>
                    <div className='font-bold text-2xl text-violet-600'>₹{price}</div>
                    <div className='font-medium text-slate-500'>/month</div>
                </div>
            
            <div className='mx-4 text-2xl font-bold my-2'>{city}</div>
            
            <div className='mx-4 text-slate-500 font-medium mb-2'>{address}</div>
            
            <hr className='mx-4'/>

            <div className='flex justify-between m-4'>
                <div className='flex space-x-1'>
                    <ArchiveIcon className='h-6 text-violet-600' />
                    <div className='text-slate-500'>3 Beds</div>
                </div>
                <div className='flex space-x-1'>
                    <ClipboardIcon className='h-6 text-violet-600' />
                    <div className='text-slate-500'>3 Bathrooms</div>
                </div>
                <div className='flex space-x-1'>
                    <ArrowsExpandIcon className='h-6 text-violet-600' />
                    <div className='text-slate-500'>6&times;8m&sup2;</div>
                </div>
            </div>
        </div>
    )
}

export default Card

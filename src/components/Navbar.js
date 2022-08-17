import React from 'react'
import { HomeIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/solid'

function Navbar() {
    return (
        <main className='h-20 flex justify-between shadow-sm bg-white'>
            {/* Left section */}
            <section className='flex items-center space-x-16 mx-16'>

                <div className='flex cursor-pointer hover:scale-110'>
                    <HomeIcon className='h-6 fill-violet-600' />
                    <div className='font-bold text-lg'>Estatery</div>
                </div>

                <div className='font-semibold border-0 rounded-md px-4 py-2 
                    bg-violet-100 text-violet-500 cursor-pointer hover:scale-110'>
                    Rent
                </div>
                <div className='font-semibold cursor-pointer hover:scale-110'>Buy</div>

                <div className='font-semibold cursor-pointer hover:scale-110'>Sell</div>

                <div className='flex cursor-pointer hover:scale-110'>
                    <div className='font-semibold'>Manage Property</div>
                    <ChevronDownIcon className='h-6' />
                </div>

                <div className='flex cursor-pointer hover:scale-110'>
                    <div className='font-semibold'>Resources</div>
                    <ChevronDownIcon className='h-6' />
                </div>

            </section>
            {/* Right section */}
            <section className='flex items-center space-x-4 mx-16'>

                <div className='font-semibold text-violet-600 border rounded-md 
                    px-4 py-2 cursor-pointer hover:scale-110'>
                    Login
                </div>

                <div className='font-semibold border-0 rounded-md 
                    px-4 py-2 text-white bg-violet-600 cursor-pointer hover:scale-110'>
                    Signup
                </div>

            </section>
        </main>
    )
}

export default Navbar

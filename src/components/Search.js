import React, { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Card from './Card'
import data from '../data.json'

function Search() {
    const [filterData, setFilterData] = useState(data)
    const [city, setCity] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState(false)


    const filterCity = (array) => {
        if(city){
            return array.filter((item) => item.city.toLowerCase().includes(city))
        }else{
            return array
        }
    }

    const filterType = (array) => {
        if(type){
            return array.filter((item => item.type.includes(type)))
        }else{
            return array
        }
    }

    const filterPrice = (array) => {
        if(price > 0){
            return array.filter((item => item.price.includes(price)))
        }else{
            return array
        }
    }

    const filterDate = (array) => {
        if(date){
            return array.filter((item) =>  item.date <= date)
        }else{
            return array
        }
    }

    useEffect(() => {
        let result = data
        result = filterCity(result)
        result = filterDate(result)
        result = filterPrice(result)
        result = filterType(result)
        if(result.length < 1) setError(true)
        else setError(false)
        setFilterData(result)
    },[city, price, type, date])

    console.log(filterData);
    
    const clearFilter = () => {
        setCity('')
        setDate('')
        setPrice('')
        setType('')
    }

    // Showing error message
  const errorMessage = () => {
    return (
      <div
        style={{ display: error ? '' : 'none' }}>
        <p>Please Modify or Clear Filters</p>
      </div>
    )
  }

    return (
        <main className='mx-40 mt-14 pb-4'>
            <section className='flex items-center justify-between'>

                <div className='font-bold text-5xl'>Search properties To rent</div>

                <div className='flex border rounded-md px-4 py-2 bg-white space-x-8'>

                    <div className='font-semibold text-slate-500'>Search with Search Bar</div>

                    <div className='border-0 rounded-full bg-slate-200 cursor-pointer'>
                        <ChevronDownIcon className='h-6 fill-violet-500' />
                    </div>
                </div>

            </section>

            <section className='flex items-center justify-between bg-white rounded-md h-24 my-10 px-8'>
                <div>
                    <div className='mb-2 font-semibold text-slate-400'>Location</div>
                    <select name="location" id="city" onChange={(e) => setCity(e.target.value)}
                     className='outline-none -ml-1 text-lg font-bold' value={city}>
                        <option value="">Select a City</option>
                        <option value="delhi">Delhi</option>
                        <option value="chennai">Chennai</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bengaluru">Bengaluru</option>
                    </select>
                </div>
                <div>
                    <div className='mb-2 font-semibold text-slate-400'>Move-in</div>
                    <div className='flex items-center space-x-3'>
                        <div className='text-lg font-bold'>Date</div>
                        <input type="date" onChange={(e) => setDate(e.target.value)}
                         className='cursor-pointer outline-none' value={date} />
                    </div>
                </div>
                <div>
                    <div className='mb-2 font-semibold text-slate-400'>Price</div>
                    <select name="price" id="price" onChange={(e) => setPrice(e.target.value)}
                        className='outline-none -ml-1 text-lg font-bold' value={price}>
                        <option value="">₹1000 - ₹3000</option>
                        <option value="1000">₹1000</option>
                        <option value="2000">₹2000</option>
                        <option value="3000">₹3000</option>
                    </select>
                </div>
                <div>
                    <div className='mb-2 font-semibold text-slate-400'>Property Type</div>
                    <select name="type" id="type" onChange={(e) => setType(e.target.value)}
                        className='outline-none -ml-1 text-lg font-bold' value={type}>
                        <option value="">Select Type</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                    </select>
                </div>

                <button className='font-semibold border-2 rounded-md
                    px-5 py-3 text-violet-600 text-lg cursor-pointer hover:scale-110'
                    onClick={clearFilter}
                    >Clear Filters</button>
            </section>

            {/* Error message */}

            <div className='text-center my-4 text-red-600 font-bold text-2xl'>
                {errorMessage()}
            </div>

            <div className='grid grid-cols-3 gap-8'>    
                {filterData?.map(({ price, city, address, img }, i) => (
                    <Card key={i}
                        city={city}
                        address={address}
                        price={price}
                        img={img}
                    />
                ))}
            </div>
        </main>
    )
}

export default Search
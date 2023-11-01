import React from 'react'
import arrow from "../../../public/flecha.jpg"
import Image from 'next/image'

function SearchBar() {
  return (
    <div className='flex max-w-full px-4 justify-center mt-6'>
      <form className='flex max-w-full bg-slate-50 p-2 rounded-full text-sm md:text-base' action="">
        <div className='w-2/6 mr-3 ml-3 border-r-2'>
          <label className='block pl-1' htmlFor="">Location</label>
          <input className='block pl-1 bg-slate-50 text-inherit outline-none' placeholder='Where are you going?' />
        </div>

        <div className='w-48 mr-3 ml-3 pr-2 border-r-2'>
          <label className='block pl-1' htmlFor="">Check-in</label>
          <input className='block pl-1 bg-slate-50 text-inherit outline-none' placeholder='Add dates' type="date" />
        </div>

        <div className='w-48 mr-3 ml-3 pr-2 border-r-2'>
          <label className='block pl-1' htmlFor="">Check-out</label>
          <input className='block pl-1 bg-slate-50 text-inherit placeholder:text-gray-400 outline-none' placeholder='Add dates' type="date" />
        </div>

        <div className='w-72 ml-3 pr-1'>
          <label className='block pl-1' htmlFor="">Guests</label>
          <input className='block pl-1 bg-transparent text-inherit  placeholder:text-gray-400 outline-none' placeholder='Add guests' type="number" />
        </div>

        <div className='flex align-middle'>
          <button className='bg-blue-950 rounded-full w-14'>
            <div>
              <Image src={arrow} alt="lens" />
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
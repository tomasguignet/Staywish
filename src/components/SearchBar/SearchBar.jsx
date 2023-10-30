import React from 'react'

function SearchBar() {
  return (
    <div className='flex justify-center mt-6'>
      <form className='flex bg-slate-50 max-w-7xl p-2 rounded-full' action="">
        <div className='mr-3 ml-3 border-r-2'>
          <label className='block pl-1' htmlFor="">Location</label>
          <input className='block pl-1 bg-slate-50 text-gray-400 border-none' placeholder='Where are you going?' />
        </div>

        <div className='mr-3 ml-3 pr-2 border-r-2'>
          <label className='block pl-1' htmlFor="">Check-in</label>
          <input className='block pl-1 bg-slate-50 text-gray-400' placeholder='Add dates' type="date" />
        </div>

        <div className='mr-3 ml-3 pr-2 border-r-2'>
          <label className='block pl-1' htmlFor="">Check-out</label>
          <input className='block pl-1 bg-slate-50 text-gray-400' placeholder='Add dates' type="date" />
        </div>

        <div className='w-42 ml-3 pr-1'>
          <label className='block pl-1' htmlFor="">Who?</label>
          <input className='block pl-1 bg-slate-50 text-gray-400 w-32' placeholder='Add guests' type="number" />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
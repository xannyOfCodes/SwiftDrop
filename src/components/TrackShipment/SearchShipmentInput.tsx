import React from 'react'


const SearchShipmentInput: React.FC = () => {
  return (
    <div className='w-full h-15 relative'>
        <input type="text" 
        placeholder='Type your tracking number'
        className='bg-zinc-100 w-full h-full p-2 shadow rounded-lg placeholder:text-sm placeholder:text-gray-500 focus:outline-0 text-zinc-800'/>
        <button className='bg-orange-600 text-zinc-100 px-4 py-3 rounded-lg absolute right-2 top-2'>Track</button>
    </div>
  )
}

export default SearchShipmentInput

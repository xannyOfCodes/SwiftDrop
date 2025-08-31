import mapImg from "/map.webp"

const GlobalReach = () => {
  return (
    <div className='p-5 py-10 flex flex-col justify-center gap-y-10 bg-gray-100 mt-5
    md:flex-row md:items-center md:justify-center md:px-10'>
        <div className='text-zinc-800'>
            <p className='font-semibold text-2xl'>Global Network, Local Impact</p>
            <p className='mt-1 font-extralight text-bases'>We connect businesses and individuals across the world with fast, secure, and reliable delivery solutions.</p>
        </div>
        <div className='md:w-full'>
            <img src={mapImg} alt="" 
            className='object-cover md:w-150'/>
        </div>
    </div>
  )
}

export default GlobalReach

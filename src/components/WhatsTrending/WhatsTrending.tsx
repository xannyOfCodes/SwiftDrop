import { WhatsTrendingData } from './WhatsTrendingData'

const WhatsTrending = () => {
  return (
    <div className='px-4 mt-25 pb-20
    md:px-10'>
        <div className='text-center text-zinc-800'>
            <p className='font-semibold text-xl'>
                What’s Trending
            </p>
            <p className='mt-1 text-sm font-light'>
                Stay up to date with the latest insights and innovations in global delivery and logistics.
            </p>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-y-7
        md:grid-cols-3 md:gap-x-5'>
            {
                WhatsTrendingData.map((data: any) => (
                    <div key={data.id}
                    className='shadow-lg rounded-lg'>
                        <img src={data.img} alt="" 
                        className='rounded-tl-lg rounded-tr-lg w-full h-70 object-cover'/>
                        <div className='mt-5 p-2 pb-5 text-zinc-800'>
                            <p className='text-base font-semibold'>{data.title}</p>
                            <p className='text-sm font-light mt-1'>{data.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default WhatsTrending

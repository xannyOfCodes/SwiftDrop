import { ServiceOptionsData } from './ServiceOptionsData'

const ServiceOptions = () => {
  return (
    <div className='p-3 flex flex-col justify-center items-center gap-y-5
    md:flex-row md:gap-x-5'>
        {
            ServiceOptionsData.map((data: any) => (
                <div key={data.id}
                className='text-zinc-500 border border-gray-400 p-5 rounded-xl
                [&:nth-child(1)_button]:bg-orange-600 [&:nth-child(2)_button]:bg-yellow-600 [&:nth-child(3)_button]:bg-slate-600
                [&:nth-child(1)_p_span:first-child]:bg-orange-600 [&:nth-child(2)_p_span:first-child]:bg-yellow-600 [&:nth-child(3)_p_span:first-child]:bg-slate-600
                md:w-1/4'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col justify-center'>
                            <p className='text-2xl font-bold tracking-wider'>{data.name}</p>
                            <p className='flex items-center gap-x-1'>
                                <span className='w-20 h-2'></span>
                                <span className='text-bse'>{data.category}</span>
                            </p>
                        </div>
                        <button className='text-xs text-zinc-100 px-5 py-2 rounded-full'>
                            Learn More
                        </button>
                    </div>

                    <p className='mt-3 text-sm'>
                        {data.desc}
                    </p>
                </div>
            ))
        }
    </div>
  )
}

export default ServiceOptions

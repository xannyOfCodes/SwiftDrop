import { GetInTouchData } from './GetInTouchData'
import GetInTouchCard from './GetInTouchCard'

const GetInTouch = () => {
  return (
    <div className='px-4 pt-5 pb-25 mt-25 bg-gray-100'>
        <p className='text-center text-xl font-semibold text-zinc-800 mt-5'>Get In Touch</p>
        <div className='grid grid-cols-1 justify-center gap-y-3 mt-10
        md:grid-cols-3 md:gap-x-5 md:px-8'>
            {
                GetInTouchData.map((data: any) => (
                    <div className='bg-white rounded-lg shadow-sm'>
                        <GetInTouchCard
                        icon={data.icon}
                        title={data.title}
                        desc={data.desc}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default GetInTouch

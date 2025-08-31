import { WhyChooseUsData } from './WhyChooseDataUs'
import WhyChooseUsCard from './WhyChooseUsCard'

const WhyChooseUs = () => {
  return (
    <div className='px-4 pt-10 pb-25 mt-25 bg-gray-100'>
        <div className='text-center'>
            <p className='text-zinc-700 text-2xl font-semibold'>Why Choose Us</p>
            <p className='mt-2 text-sm font-light text-zinc-800'>We make package delivery fast, reliable, and stress-free for everyone, everywhere.</p>
        </div>
        <div className='grid grid-cols-1 gap-y-5 justify-center mt-15
        md:grid-cols-2 md:gap-x-5 md:px-8'>
            {
                WhyChooseUsData.map((data: any) => (
                    <div key={data.id}
                    className='bg-white rounded-lg shadow-sm'>
                        <WhyChooseUsCard
                        icon={data.icon}
                        title={data.title}
                        desc={data.desc}
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default WhyChooseUs

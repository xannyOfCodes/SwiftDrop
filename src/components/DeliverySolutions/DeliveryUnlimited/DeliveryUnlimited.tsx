import { DeliveryUnlimitedData } from './DeliveryUnlimitedData'
import { CheckCircle } from 'lucide-react'

const DeliveryUnlimited = () => {
  return (
    <div className='mt-20 text-zinc-800 p-5 pb-20'>
        <p className='text-center font-semibold text-xl'>Delivery Unlimited</p>
        <div  className='mt-10 flex flex-col gap-y-5 items-center
         md:flex-row md:justify-center md:items-center md:gap-x-10'>
            {
            DeliveryUnlimitedData.map((data: any) => (
                <div key={data.id}
                className='flex flex-col items-center justify-center text-center'>
                    <img src={data.img} alt="" 
                    className='w-30 h-30 rounded-full object-cover'/>
                    <div className='p-2'>
                        <p className='text-base font-semibold flex items-center justify-center gap-x-1'>{data.title} <CheckCircle className='inline text-orange-600'/></p>
                        <p className='text-sm font-light'>{data.desc}</p>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default DeliveryUnlimited

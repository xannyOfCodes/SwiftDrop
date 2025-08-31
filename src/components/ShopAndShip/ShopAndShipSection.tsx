import { ShopAndShipData } from './ShopAndShipData'
import { Globe, Package, Send } from 'lucide-react'

const ShopAndShipSection = () => {
  return (
    <div className='p-2 text-zinc-800 mt-20 pb-10
    md:px-10'>
        {
            ShopAndShipData.map((data: any) => (
                <div style={{backgroundImage: `url(${data.bgImg})`}}
                className='bg-no-repeat bg-cover bg-[80%] relative rounded-lg'>
                    <div className='bg-white/40 px-4 pt-7 pb-10'>
                       <div className='flex items-center gap-x-1 bg-orange-600/10 p-2 w-1/3 rounded-full
                       md:w-1/11'>
                         <Package className='text-orange-600' size={30}/> <Send className='text-orange-600' size={30}/> <Globe className='text-orange-600' size={30}/>
                       </div>
                        <p className='text-xl font-semibold mt-5
                        md:w-1/2'>
                            {data.title}
                        </p>
                        <p className='text-base font-light text-zinc-900 mt-1 tracking-wide
                        md:w-1/2'>
                            {data.desc}
                        </p>
                        <button className='px-6 py-2 bg-orange-600 mt-5 text-zinc-100 text-sm rounded-full'>Sign up</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ShopAndShipSection

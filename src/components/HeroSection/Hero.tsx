import SearchShipmentInput from '../TrackShipment/SearchShipmentInput'
import HeroCarousel from './HeroCarousel'

 
const Hero = () => {
  return (
    <div className='md:flex items-center gap-x-5
    md:px-20'>
        <div className='order-1 md:w-1/3
        md:mt-10'>
          <HeroCarousel/>
        </div>
        <div className='mt-10 px-3
        md:w-1/2'>
          <p className='text-orange-600 text-3xl font-semibold
          md:text-4xl'>Track Your Shipment</p>
          <div className='mt-5'><SearchShipmentInput/></div>
          <p className='text-gray-500 mt-5 text-xs font-light flex flex-col gap-y-1 text-center w-full
          md:text-start'>
            <span>
              Enter multiple tracking numbers with a space or comma.
              If your tracking number isn't working, double-check the format or click <a href="" className='text-orange-600 hover:border-b cursor-pointer'>here</a> for support.
            </span>
            <span>
              Registered business customers can access advanced tracking by logging into their accounts <a href="" className='text-orange-600 hover:border-b cursor-pointer'>here</a>.
            </span>
          </p>
        </div>
    </div>
  )
}

export default Hero

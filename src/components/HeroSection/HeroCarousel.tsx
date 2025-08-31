import { carouselData } from './CarouselData'
import HeroCarouselCard from './HeroCarouselCard'

const HeroCarousel = () => {
  return (
    <div className='p-3'>
       <HeroCarouselCard autoSlide={true}>
        {
          carouselData.map((data) => (
            <img src={data.img} alt="" 
            className='md:w-full md:rounded-lg'/>
          ))
        }
       </HeroCarouselCard>
    </div>
  )
}

export default HeroCarousel

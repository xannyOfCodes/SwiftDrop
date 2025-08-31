import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState, type ReactNode } from 'react'


type Props = {
  children: ReactNode,
  autoSlide: boolean,
  autoSlideInterval?: number
}
const HeroCarouselCard: React.FC <Props> = ({ 
  children, 
  autoSlide=false ,
  autoSlideInterval = 3000,
}) => {
  const slides = React.Children.toArray(children)
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length -1 : curr -1) )
  const next = () => setCurr((curr) => (curr === slides.length -1 ? 0 : curr +1) )

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval])


  return (
    <div className='overflow-hidden relative rounded-lg
   md:w-[120%]'>
      <div className='flex transition-transform ease-out duration-500'
      style={{ transform: `translateX(-${curr * 100}%)`}}>
        {slides}
      </div>

      {/* Navigation buttons */}
      <div className='absolute inset-0 flex items-center justify-between p-4
      md:hidden'>
        <button onClick={prev}
        className='p-1 rounded-full shadow bg-white/10'>
          <ChevronLeft size={30}
          className='text-orange-600'/>
        </button>
        <button onClick={next}
         className='p-1 rounded-full shadow bg-white/10'>
          <ChevronRight size={30}
          className='text-orange-600'/>
        </button>
      </div>

      {/* Indicator to show active and total slides */}
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {
            slides.map((_, index) => (
              <div key={index}
              className={`
                transition-all w-2 h-2 rounded-full
                ${curr === index ? "bg-orange-600": "bg-white/30"}
                `}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HeroCarouselCard

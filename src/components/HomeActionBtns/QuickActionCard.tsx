import React from 'react'

interface QuickActionCardProps {
    title: string,
    icon: React.ElementType,
    desc: string,
}
const QuickActionCard: React.FC <QuickActionCardProps> = ({
    title,
    icon: Icon,
    desc
}) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center text-center px-10 py-10 rounded-lg shadow
    hover:bg-orange-800 hover:text-zinc-100
    md:py-5'>
        <p className=' text-lg font-semibold
        md:order-2 md:mt-3'>
          {title}
        </p>
        <Icon className="inline mt-5 text-orange-600 group-hover:text-zinc-100 group-first:text-zinc-100 md:order-1" size={40}/>
        <p className='mt-5 text-sm md:font-light md:order-3'>{desc}</p>
    </div>
  )
}

export default QuickActionCard

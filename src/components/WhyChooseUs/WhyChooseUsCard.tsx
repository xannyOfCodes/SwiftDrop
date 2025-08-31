import React from 'react'

type WhyChooseUsCardProps = {
    title: string,
    icon: React.ElementType,
    desc: string,
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({
    title,
    icon: Icon,
    desc
}) => {
  return (
    <div className='w-full flex flex-col justify-center items-center p-10 '>
        <Icon size={40}
        className="text-orange-600"/>
        <p className='text-zinc-700 text-xl font-semibold mt-3'>{title}</p>
        <p className='text-center text-sm mt-1 text-zinc-600'>{desc}</p>
    </div>
  )
}

export default WhyChooseUsCard

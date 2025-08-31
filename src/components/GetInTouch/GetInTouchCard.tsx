import React from 'react'

type Props ={
    title: number,
    desc: string,
    icon: React.ElementType,
}
const GetInTouchCard: React.FC<Props> = ({
    title,
    desc,
    icon : Icon
}) => {
  return (
    <div className='flex flex-col items-center p-10 '>
        <Icon size={40}
        className="text-orange-600"/>
        <p className='mt-5 text-lg font-semibold text-zinc-800'>{title}</p>
        <p className='text-center mt-1 text-sm text-zinc-700'>{desc}</p>
    </div>
  )
}

export default GetInTouchCard

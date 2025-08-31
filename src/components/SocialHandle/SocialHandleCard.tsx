import React from 'react'

 type Props ={
    icon: React.ElementType
 }
const SocialHandleCard: React.FC <Props> = ({icon: Icon}) => {
  return (
    <div>
        <Icon size={25} className="text-zinc-300"/>
    </div>
  )
}

export default SocialHandleCard

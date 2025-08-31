import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'

type Props = {
  item : any,
  toggleSecondLevel: (id: string) => void,
  secondLevelIsOpen: String | null,
  isLargeScreen: boolean,
}
const FooterCard: React.FC<Props> = ({
    item,
    toggleSecondLevel,
    secondLevelIsOpen,
    isLargeScreen
}) => {
  return (
    <div className='border-b border-gray-700 p-1
    md:border-0'>
        
        {/* Top Level */}
        <div onClick={() => toggleSecondLevel(item.id)} key={item.id}
        className='flex items-center justify-between w-full '>
            <p className='text-lg font-semibold text-orange-600'>
            {item.Top_Level}
            </p>
            <span className='md:hidden'>{secondLevelIsOpen === item.id ? <ChevronUp className='inline' size={25}/> : <ChevronDown className='inline' size={25}/>}</span>
        </div>

        {/* sEcond Level */}
        <div>
            { (isLargeScreen || secondLevelIsOpen === item.id) &&
                item.second_Level.map((secondLvlItems: any) => (
                    <p key={secondLvlItems.id}
                    className='text-base text-zinc-500 p-1'>
                        {secondLvlItems.name}
                    </p>
                ))
            }
        </div>
    </div>
  )
}

export default FooterCard

import React from 'react'


type Props = {
  item : any,
  toggleSecondLevel: (id: string) => void,
  secondLevelIsOpen: String | null,
  toggleThirdLevel: (id: string) => void,
  thirdLevelIsOpen: String | null,
  isLargeScreen: boolean,
  // isOpen: Boolean;
  // onToggle: () => void,
}

const NavListCard: React.FC <Props> = ({
  item, 
  toggleSecondLevel, 
  secondLevelIsOpen, 
  toggleThirdLevel, 
  thirdLevelIsOpen,
  isLargeScreen
}) => {

    
  return (
    <div className=''>
      {/* Top Level */}
        <p onClick={() => toggleSecondLevel(item.id)} key={item.id}
        className='text-zinc-800 font-semibold border-b border-gray-300 p-2
        md:border-0' >
          {item.Top_Level}
        </p>
        <div>

          {/* Second Level */}
          { secondLevelIsOpen === item.id &&
            item.second_Level?.map((secondLvlItem: any) => (
              <div key={secondLvlItem.id}
              className='md:absolute md:w-full md:right-0 md:left-0 md:top-20  bg-amber-800'>
                <p className='text-orange-600 font-light text-base px-2 pt-1'
                 onClick={() => toggleThirdLevel(`${item.id}-${secondLvlItem.id}`)}>
                  {secondLvlItem.name}
                  </p>

                  {/* Third Level */}
                { ( isLargeScreen || thirdLevelIsOpen === `${item.id}-${secondLvlItem.id}`) &&
                  secondLvlItem.Third_Level?.map((thirdLvlItem: any) => (
                    <p className='text-zinc-500 font-light text-sm p-1  pl-5' key={thirdLvlItem.id}>{thirdLvlItem.name}</p>
                  ))
                }
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default NavListCard;

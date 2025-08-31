import { ChevronDown, MapPin, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import NavListCard from './NavListCard';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const navItems= [
    {   
        id: 1,
        Top_Level: "Ship & Track", 
        second_Level:[
            {
                id: 1,
                name: "Ship & Track",
                Third_Level:[
                    { id: 1, name: "Send a Shipment", path: ""},
                    { id: 2, name: "Calculate Shipping Rates", path: ""},
                    { id: 3, name: "Track a Shipment", path: ""},
                    { id: 4, name: "Freight Tracking", path: ""},
        ]
            }
        ]
    },
    {   id: 2,
        Top_Level: "Logistics Solutions", 
        second_Level:[
            {
                id: 1,
                name: "Business Solutions",
                Third_Level:[
                    { id: 1, name: "Freight", path: ""},
                    { id: 2, name: "Express", path: ""},
                    { id: 3, name: "Fuel Surcharge", path: ""},
                    { id: 4, name: "Logistics & Warehousing", path: ""},
                    { id: 5, name: "Signature Surcharge", path: ""},
                    { id: 6, name: "Service & Rate Guide", path: ""},
                    { id: 7, name: "CX Services", path: ""},
                ]
            },
            {
                id: 2,
                name: "Industry Solution",
                Third_Level:[
                    { id: 1, name: "Oil & Gas", path: ""},
                    { id: 2, name: "Chemicals & Dangerous Goods", path: ""},
                    { id: 3, name: "Fashion & Retail", path: ""},
                    { id: 4, name: "Healthcare", path: ""},
                ]
            },
            {
                id: 3,
                name: "Products", 
                Third_Level:[
                    { id: 1, name: "SwiftDrop Pickup Points", path: ""},
                    { id: 2, name: "ClickToShip", path: ""},
                    { id: 3, name: "Pick & Drop Partner Program", path: ""},
                    { id: 4, name: "Shop & Ship", path: ""},
                ]
            },
        ]
    },
    { 
        id: 3,
        Top_Level: "Contact", 
        second_Level:[
            {
                id: 1,
                name: "Contact & Support", 
                Third_Level:[
                    { id: 1, name: "About Us", path: ""},
                    { id: 2, name: "Help & Support Center", path: ""},
                    { id: 3, name: "Frequently Asked Questions", path: ""},
                ]
            },
        ]
    },
]

const NavList: React.FC  = () => {
    const [viewNavList, setViewNavList] = useState(false);
    const [viewSecondLevel, setViewSecondLevel] = useState<string | null>(null)
    const [viewThirdLevel, setViewThirdLevel] = useState<string | null>(null)
    const isLargeScreen = useMediaQuery("(min-width: 768px)")
    console.log(isLargeScreen);
    

    const toggleNavMenu = () => {
        if (isLargeScreen) {
            setViewNavList(true)
        } else {
            setViewNavList(viewNavList)
        }
    }

    useEffect(()=>{
        toggleNavMenu()
    }, [])

    

    const toggleSecondLevel = (id: any) => {
        setViewSecondLevel(viewSecondLevel === id ? null : id)
        setViewThirdLevel(null)
    }
    const toggleThirdLevel = (id: any) => {
        if (isLargeScreen) {
            setViewThirdLevel(id)
        } else {
            setViewThirdLevel(viewThirdLevel === id ? null : id)
        }
    }

    
    
    
  return (
    <div className=''>
        <button onClick={() => setViewNavList(!viewNavList)}
        className=' text-orange-600 text-lg transition-all ease-out
        md:hidden'>
            {
                viewNavList ? <X className='w-8 h-8'/> : <Menu className='w-8 h-8'/>
            }
        </button>

        {/* displays Nav list items */}
       {
        viewNavList &&
         <div className='absolute w-full top-full left-0 px-2 z-50
         md:relative md:left-0 md:w-auto'>
            <div className='px-2 py-3 border border-gray-300 rounded-sm flex flex-col gap-y-2 bg-zinc-50
            md:flex-row md:border-0 md:items-center md:gap-0 md:p-0 md:bg-transparent'>
                {
                navItems.map((item: any) => (
                        <NavListCard key={item.id} item={item}
                        toggleSecondLevel={() => toggleSecondLevel(item.id)}
                        secondLevelIsOpen={viewSecondLevel}
                        toggleThirdLevel={toggleThirdLevel}
                        thirdLevelIsOpen={viewThirdLevel}
                        isLargeScreen={isLargeScreen}
                        />
                ))
            }
            <div className='flex justify-between items-center mt-10
            md:hidden'>
                <p className='flex items-center gap-x-1 font-light text-zinc-800'><MapPin className='text-zinc-600'/> Canada <ChevronDown className='text-zinc-600'/></p> <span className='text-orange-700 text-base font-semibold'>English</span>
            </div>
            </div>
        </div>
       }
    </div>
  )
}

export default NavList

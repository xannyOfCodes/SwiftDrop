import React, { useEffect, useState } from 'react'
import { FooterListData } from './FooterData'
import FooterCard from './FooterCard'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const FooterList: React.FC = () => {
    const isLargeScreen = useMediaQuery("(min-width: 768px)")
     const [viewSecondLevel, setViewSecondLevel] = useState<string | null>(isLargeScreen ? "all" : null)

    const toggleSecondLevel = (id: any) => {
        if (isLargeScreen) return;
            setViewSecondLevel(viewSecondLevel=== id ? null : id)
    }
    useEffect(() => {
        if (isLargeScreen) {
            setViewSecondLevel("all")
        }
    }, [isLargeScreen])
  return (
    <div className='flex flex-col gap-y-5
    md:flex-row md:items-start md:gap-x-5'>
        {
            FooterListData.map((data: any) => (
                <div key={data.id}>
                    <FooterCard
                    item={data}
                    toggleSecondLevel={toggleSecondLevel}
                    secondLevelIsOpen={viewSecondLevel}
                    isLargeScreen={isLargeScreen}
                    />
                </div>
            ))
        }
    </div>
  )
}

export default FooterList

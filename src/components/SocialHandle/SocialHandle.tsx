import SocialHandleCard from './SocialHandleCard'
import { SocialHandles } from './SocialHandleData'


const SocialHandle = () => {
  return (
    <div className='flex items-center gap-x-4'>
        {
            SocialHandles.map((items: any) => (
                <SocialHandleCard
                key={items.id}
                icon={items.icon}/>
            ))
        }
    </div>
  )
}

export default SocialHandle

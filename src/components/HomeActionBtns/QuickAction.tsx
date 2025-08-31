import { QuickActionData } from './ActionBtnsData'
import QuickActionCard from './QuickActionCard'

const QuickAction = () => {
  return (
    <div className='py-5 pb-20 px-4 bg-zinc-100 mt-20
    md:flex md:items-center md:gap-x-5 md:justify-center'>
        {
            QuickActionData.map((data: any) => (
                <div key={data.id}
                className='mt-5 bg-white text-zinc-700 first:bg-orange-700 first:text-zinc-100 rounded-lg group
                md:w-80 md:h-50 md:[&:nth-child(1)]:order-2 md:[&:nth-child(2)]:order-1 md:[&:nth-child(3)]:order-3 md:[&:nth-child(4)]:order-4
                md:[&:nth-child(1)]:h-60'>
                    <QuickActionCard
                    title={data.title}
                    icon={data.icon}
                    desc={data.desc}/>
                </div>
            ))
        }
    </div>
  )
}

export default QuickAction

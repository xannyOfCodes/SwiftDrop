import { AwardsData } from './AwardsData'

const AwardsSection = () => {
  return (
    <div className='grid grid-cols-5 p-5 pb-10
    md:px-10'>
       {
        AwardsData.map((data: any) => (
            <img src={data.img} alt="" key={data.id}
            className='w-15 object-cover
            md:w-30'/>
        ))
       }
    </div>
  )
}

export default AwardsSection

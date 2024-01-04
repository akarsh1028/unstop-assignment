import OverviewOne from '../overview/OverviewOne'
import { candidate } from '@/app/context/values'
import OverviewTwo from '../overview/OverviewTwo'

const BarDetails = () => {
  
  return (
    <div className='border border-solid border-bordergrey rounded-xl flex flex-col gap-[0.0625rem]'>
      {/* Total Assesment and Purspose Start */}
      <div className='flex xl:justify-between'>
        <OverviewOne name="Total Assessment" src="/boxlayer.svg" count="34"/>
        <div className='flex max-xl:hidden'>
          {candidate.map((item) => (
            <OverviewTwo key={item.name} name={item.name} data={item.data}/>
          ))}
        </div>
        <OverviewOne name="Total Purpose" src="/link2.svg" count="11" border/>
      </div>
      {/* Total Assesment and Purspose End */}
      {/* Candidates Start */}
      <div className='xl:hidden'>
        {candidate.map((item) => (
          <OverviewTwo key={item.name} name={item.name} data={item.data}/>
        ))}
      </div>
      {/* Candidates End */}
    </div>
  )
}

export default BarDetails
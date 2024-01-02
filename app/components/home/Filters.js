import Image from 'next/image'

const Filters = ({ setShow, show }) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='maintext'>My Assessment</div>
      <div className='flex gap-1'>
        <div className='w-10 h-10 p-1 rounded-[3.125rem] bg-white placecenter'>
          <Image src="/filters/search.svg" alt='search' width={22} height={22} />
        </div>
        <div className='w-10 h-10 p-1 rounded-[3.125rem] bg-white placecenter'>
          <Image src="/filters/filter_list_alt.svg" alt='filter_list_alt' width={24} height={24} />
        </div>
        <div onClick={() => setShow(!show)} className={`${show && 'activebar'} w-10 h-10 p-1 rounded-[3.125rem] bg-white placecenter`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16V5H4V16H0ZM6 16V0H10V16H6ZM12 16V9H16V16H12Z" fill="#1C4980"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Filters
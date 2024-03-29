import Image from 'next/image'

const Filters = ({ setShow, show }) => {

  const handleChange = () => {
    // showing and hiding overview section on button click
    show ? document.getElementById("overview").style.display = "none" : document.getElementById("overview").style.display = "flex";
    setShow(!show)
  }

  return (
    <div className='flex justify-between items-center xl:h-10'>
      <div className='text-darkblue text-base font-semibold xl:text-[1.125rem] lg:font-medium'>My Assessment</div>
      <div className='flex gap-1 xl:hidden'>
        <div className='w-10 h-10 p-1 rounded-[3.125rem] bg-white placecenter'>
          <Image src="/filters/search.svg" alt='search' width={22} height={22} />
        </div>
        <div className='w-10 h-10 p-1 rounded-[3.125rem] bg-white placecenter'>
          <Image src="/filters/filter_list_alt.svg" alt='filter_list_alt' width={24} height={24} />
        </div>
        <div onClick={handleChange} className={`${show && 'activebar'} w-10 h-10 p-1 rounded-[3.125rem] bg-white placecenter`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16V5H4V16H0ZM6 16V0H10V16H6ZM12 16V9H16V16H12Z" fill="#1C4980"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Filters
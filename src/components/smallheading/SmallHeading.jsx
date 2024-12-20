import React from 'react'

const SmallHeading = ({text}) => {
  return (
    <div className='   flex gap-[10px] items-center'>
        <div className='text-sm text-secondary uppercase leading-[14px] font-semibold tracking-[1.4px]'>
        {text}
        </div>
        <img src="/assets/svg/about/smallheading/aboutheading.svg" alt="" className=' w-[13.91px] h-3' />
      
    </div>
  )
}

export default SmallHeading

import React from 'react'


function HeaderItem({Icon , title}) {
  return (
    <div className='flex flex-col items-center group cursor-pointer w-12 sm:w-20 hover:text-white'>
        <Icon className = "h-8 mb-1 group-hover:animate-bounce"/>
        <p className= 'opacity-0  group-hover:opacity-100 tracking-widest text-[10px] sm:text-lg'>{title}</p>
    </div>
  )
}

export default HeaderItem
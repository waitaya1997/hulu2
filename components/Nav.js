import { useRouter } from 'next/router'
import React from 'react'
import request from '../utils/request'

function Nav(props) {
  const router = useRouter();
  return (
    <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(request).map(([key,{title,url}])=>(
            <h2 
            className='last:pr-24 cursor-pointer transition duration-100 transform 
            hover:scale-125 hover:text-white active:text-red-500
            ' 
            key={key}
            onClick = {function(){
              router.push(`/?genre=${key}`)
            }}
            >
            {title}
            </h2>
        ))}
    </div>
  )
}

export default Nav
import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Select = ({title ="Select a option", options=[]}) => {
  return (
    <div className='w-full'>
        <div className='flex h-[50px] bg-white p-[15px] text-[18px] rounded-[8px] border border-gray justify-between ' style={{boxShadow: '0 0 5px rgba(0,0,0, 0.1'}}>
            <span className='text-xl'>{title}</span>
            <MdOutlineKeyboardArrowDown size={20}/>
        </div>
        <ul className='relative p-[15px] rounded-[8px] mt-[10px] bg-white max-h-[500px]' style={{boxShadow: '0 0 5px rgba(0,0,0, 0.1'}}>
            <li className='flex h-[50px] cursor-pointer px-[10px] rounded-[8px] items-center bg-white hover:bg-[#f2f2f2]'><span className='text-xl'>Github</span></li>
            <li className='flex h-[50px] cursor-pointer px-[10px] rounded-[8px] items-center bg-white hover:bg-[#f2f2f2]'><span className='text-xl'>Facebook</span></li>
            <li className='flex h-[50px] cursor-pointer px-[10px] rounded-[8px] items-center bg-white hover:bg-[#f2f2f2]'><span className='text-xl'>LinkedIn</span></li>
            <li className='flex h-[50px] cursor-pointer px-[10px] rounded-[8px] items-center bg-white hover:bg-[#f2f2f2]'><span className='text-xl'>LinkedIn</span></li>
            <li className='flex h-[50px] cursor-pointer px-[10px] rounded-[8px] items-center bg-white hover:bg-[#f2f2f2]'><span className='text-xl'>LinkedIn</span></li>
            <li className='flex h-[50px] cursor-pointer px-[10px] rounded-[8px] items-center bg-white hover:bg-[#f2f2f2]'><span className='text-xl'>LinkedIn</span></li>
        </ul>
    </div>
  )
}

export default Select 
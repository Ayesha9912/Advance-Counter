import React from 'react';
import { IoMdSettings } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { openModeltwo, setcount } from './Action/Action';

export default function Navbar({bg}){
  let dispatch = useDispatch()
  return(
    <div className='w-full cursor-pointer h-[10vh] flex justify-center items-center relative'>
        <IoMdSettings onClick={()=> {dispatch(openModeltwo())
        console.log("Clicked");
        }} className='text-white' size={30}/>
        <VscDebugRestart onClick={()=>{dispatch(setcount())}}  className='text-white cursor-pointer ml-5' size={30}/>
        <div className='absolute top-0 sm:flex right-0 p-4 gap-x-4'>
          <div onClick={()=>bg('bg-pink-700')} className='size-10 rounded-lg border-2 mt-2 cursor-pointer border-white bg-pink-700'></div>
          <div onClick={()=>bg('bg-yellow-400')} className='size-10 rounded-lg border-2 mt-2 cursor-pointer border-white bg-yellow-400'></div>
          <div onClick={()=>bg('bg-blue-400')} className='size-10 rounded-lg border-2 mt-2 cursor-pointer border-white bg-blue-400'></div>
        </div>
    </div>
  )
}

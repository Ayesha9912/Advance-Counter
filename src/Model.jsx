import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from "react-icons/rx";
import { Reset, otherfun } from './Action/Action';

export default function Model({bgcolor}){
    let settrue = useSelector(state => state.reSet.reset)
    let dispatch = useDispatch()
  return(
    <>
    <div className={`w-[100%] h-[100vh] ${bgcolor}  fixed top-0 left-0 bg-black  rounded-lg ${settrue ? 'flex': 'hidden'} flex-col items-center  justify-center`}>
        <div className='flex flex-col items-center relative  justify-center w-[100%] h-[100%]'>
        <RxCross2 onClick={()=> {dispatch(otherfun())}}  className='text-white cursor-pointer absolute top-3 right-3' size={30}/>
        <h1 className='text-white text-xl text-center font-bold'>Are you sure to reset the counter?</h1>
        <p onClick={()=>{dispatch(Reset())}} className={`text-white cursor-pointer font-bold mt-10 hover:${bgcolor}  rounded-md p-3`}>Yes</p>
        <p  className={`text-white font-bold mt-3 hover:${bgcolor}  rounded-md p-3`}>No</p>
        </div>
    </div>
    </>
  )
}

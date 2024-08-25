import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import {useSelector, useDispatch  } from 'react-redux';
import { Decrement, Increment } from './Action/Action';

export default function Counter({bgcolor}){
    const count = useSelector(state=> state.reducer)
    const dispatch = useDispatch()
    return(
        <div className='flex p-7 w-full h-[80vh] justify-between items-center'>
            <button onClick={() => { dispatch(Decrement()) }} className={`size-16 rounded-full ${bgcolor} border-2 flex justify-center items-center border-white text-white`}><FaMinus className='text-white' size={25} /></button>
            <p className='text-[200px] text-white'>{count}</p>
            <button onClick={() => { dispatch(Increment()) }} className={`size-16 rounded-full ${bgcolor} border-2 flex justify-center items-center border-white text-white`}><FaPlus className='text-white' size={25} /></button>
        </div>
    )
}

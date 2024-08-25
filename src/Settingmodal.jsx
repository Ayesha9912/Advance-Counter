import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux'
import { closeModeltwo, setting } from './Action/Action'

export default function Settingmodal({bgcolor}) {
    const [input, setinput] = useState("")
    const dispatch = useDispatch()
    let settrue2 = useSelector(state => state.reSet2.reset2)
    let handleInput = () =>{
        dispatch(setting(Number(input)))
    }
    console.log(settrue2, "openModaltwo");
    return(
        <>
            <div className={`w-[100%] h-[100vh] border ${bgcolor}  fixed property  top-0 left-0   rounded-lg ${settrue2 ? 'flex' : 'hidden'} flex-col items-center  justify-center`}>
                <div className='w-[100%] h-[100%] flex-col items-center  justify-center relative'>
                    <RxCross2 onClick={() => { dispatch(closeModeltwo()) }} className='text-white cursor-pointer absolute top-3 right-3' size={30} />
                    <div className=' flex items-center justify-center h-[100vh]'>
                        <h1 className='text-white font-bold'>Set Count</h1>
                        <input type="number" value={input} onChange={(e) => setinput(e.target.value)} className={`w-28 h-10 outline-none pl-2 border text-white ${bgcolor}  ml-6`}/>
                        <button onClick={handleInput} className={`text-white ${bgcolor}  rounded-md p-3 ml-3`}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

import React, { useState } from 'react'
import Navbar from './Navbar'
import Counter from './Counter'
import Model from './Model';
import Settingmodal from './Settingmodal';

function App(){
  const [bgcolor, setbgcolor] = useState("bg-black")
  return(
    <>
    <div className={`w-full h-[100vh] ${bgcolor}`}>
     <Navbar bg={setbgcolor}/>
     <Counter bgcolor={bgcolor}/>
     <Model bgcolor={bgcolor}/>
     <Settingmodal bgcolor={bgcolor}/>
    </div>
    </>
  )
}

export default App
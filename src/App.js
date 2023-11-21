import React,{useState} from 'react'
import './App.css'
const App = () => {
  let time=new Date().toLocaleTimeString();
  const [ctime,setTime]=useState(time);
  const updateTime = () =>{
    time =new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(updateTime)
  return (
      <>
      <div className='box'>
     <h1>{ctime}</h1>
     </div>
      </>
  )
}

export default App
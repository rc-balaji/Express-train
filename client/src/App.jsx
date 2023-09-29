import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  

  const Get =async (id,ti,dir)=>{
    await axios.get(`http://localhost:3000/get/${id}`,{
      params:{
        title:ti,
        dir:dir
      }
    }).then(
      (res)=>{
        
        setCount(res.data)
      }
    )



  }
  
  const Post =async ()=>{
    await axios.post('http://localhost:3000/post',{count1}).then(
      (res)=>{
        setCount1(res.data)
      }
    ).catch(console.error("Error"))
  }


  const Delete =async (id)=>{
    await axios.delete(`http://localhost:3000/delete/${id}`).then(
      (res)=>{
        setCount1(res.data)
      }
    ).catch(console.error("Error"))
  }

  
  const Put =async (id,text)=>{
    await axios.put(`http://localhost:3000/put/${id}`,{text}).then(
      (res)=>{
        setCount1(res.data)
      }
    ).catch(console.error("Error"))
  }

  return (
   <div>
    Data:{count.data}
    <br />
    Dir:{count.dir}
    <br />
    <br />
    {/* {count1.mess} */}
    <br />
    <input onChange={(e)=>{
      setCount1(e.target.value)
    }} ></input>


   
    <br></br>
   <div className='ssss'>
      <button onClick={()=>Get(3,"HM","Sami345")} >Get</button>
      <button onClick={Post} >Sent</button>
      
      <button onClick={()=>Delete(5)} >Delete</button>
      <button onClick={()=>Put(7,"Updated")} >Update</button>
   </div>
   </div>
  )
}

export default App

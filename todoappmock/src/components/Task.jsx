import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../style/forms.css'

const Task = () => {

    const [data,setData]=useState([])
    const [task,setTask]=useState({text:""});
    const handleClick=()=>{
     if(data.length<5){
      axios.post("https://mock-coding.onrender.com/signupuser",task)
      .then((res)=>{
        getData()
      })
     }else{
      alert("Daily limit exceeded")
     }
    }
    const handleDelete=(id)=>{
      axios.delete("https://mock-coding.onrender.com/signupuser"+id)
      .then((res)=>{
        getData()
      })
    }
    const getData=()=>{
      axios.get("https://mock-coding.onrender.com/signupuser")
          .then((res) => {
              setData(res.data)
          })
    }
    useEffect(() => {
      getData() 
  }, [])
 
  return (
    <div>
     <div className='taskcontainer'>
      <div >
        <h2>hello</h2>
         <button className='formBtn' style={{width:"auto" }} ><Link to="/">Logout</Link></button>

      </div>
     <div><h1>Raj</h1></div>
        
      <div>
        <p>
          good to see you here
        </p>
        <p>
          your total task for today-3
        </p>
        <p>
          task for 24dec 2017
        </p>
      </div>
      <div>
        {
          data?.map((el,i)=><div key={el.id} style={{display:"flex"}}><p >{el.text}</p> <button onClick={()=>handleDelete(el.id)}>delete</button></div>)
        }
      </div>
      <div>
        <input type="text" value={task.text} onChange={(e)=>setTask({...task,text:e.target.value})} placeholder='Set your task'/>
        <br />
        <button className='formBtn' style={{width:"auto" }} onClick={handleClick}>Add new task</button>
      </div>
    </div>
    </div>
  )
}

export default Task

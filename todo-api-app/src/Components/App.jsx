import '../App.css'
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  
  const [text,setText]=useState("")
  const [todos,setTodos]=useState([])
  
  let handleAdd =()=>{
    
    let obj={
      "title": "Rajkumar",
      "author": "typicode"
    }
    axios.post("http://localhost:5000/posts",obj)
    setTodos([...todos ,obj])
  }

  let handleChange=(e)=>{
    setText(e.target.value)
  }

  let getData=()=>{
    axios.get("http://localhost:5000/posts").then((res) => {
      console.log(res.data);
    })
    .catch((errr) => {
      console.log("errrrr");
    });
  }
  
  useEffect(()=>{
    getData()
    handleAdd()
},[])
  

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
{
  <input style={{
    padding:"5px"
  }} value={text} onChange={handleChange} placeholder='Write something'></input>
}
  <button onClick={handleAdd} style={{
    padding:"5px"
  }}>Add</button>

  <ul>
    {
      todos.map((todo)=>(
<h4>{todo}</h4>
      ))}
  </ul>
      </div>
    </div>
  )
}

export default App

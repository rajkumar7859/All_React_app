import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import '../style/forms.css'

const Login = () => {

    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        password: "",
        userName:"",
      });
    
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((priv) => {
            return { ...priv, [name]: value };
          });
    }

    const handleSubmit  = (e) => {
        e.preventDefault()
        
        if( formData.userName==="" || formData.password==="")
        {
            alert("🤦‍♂️ Please fill all details")
        }
        else
        {
    axios.get('https://mock-coding.onrender.com/signupuser')
    .then(res => {
      const req=res.data
    
      const username =formData.userName
      const passwordEntered =formData.password
       let loginT=false;
        for(let i=0;i<req.length;i++)
        {
            if (req[i].username==username && req[i].confirmpassword==passwordEntered) {
               loginT=true;
               break
            } 
        }
      if(loginT){
        alert("Login successfull")
        navigate("/task")
      }else{
        alert("invalid credentials")
      }
    })
    .catch(error => {
      console.log("api fails",error);
    });
          }
        }
  return (
    <div>
     <div className='signupContainer'>
        <h2>Welcome !</h2>
        <form className='formContainer' onSubmit={handleSubmit}>
        <label htmlFor='userName'>User name</label>
        <input type="text" name='userName' onChange={handleInputChange} placeholder='Enter your user name' className='userName'/>
        <label htmlFor='userPass'>Password</label>
        <input type="password" name='password' onChange={handleInputChange} placeholder='Enter your Password' className='userPass'/>
        <div className='btnCont'>
        <button className='formBtn'>Login</button>
        </div>
        </form>
    </div>
    </div>
  )
}

export default Login

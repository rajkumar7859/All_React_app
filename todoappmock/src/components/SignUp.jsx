import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/forms.css'

const SignUp = () => {
    const navigate=useNavigate()
    const [userData, setUserData] = useState([]);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        userName:"",
        confirmPassword:""
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
        
        if(formData.email==="" || formData.userName==="" || formData.password==="" || formData.confirmPassword==="")
        {
            alert("🤦‍♂️ Please fill all details")
        }
        else if(formData.password!==formData.confirmPassword)
        {
            alert("🤦‍♂️ Please enter same password")
        }
        else
        {
            const allData = {
                useremail:formData.email,
                userpassword:formData.password,
                username:formData.userName,
                confirmpassword:formData.confirmPassword
              };
            //   console.log(allData);
              setUserData(allData);
              storeData(allData)
              navigate("/login")
            }
        
    }

let storeData= async(allData)=>{
    try {
        let res= await fetch(`https://mock-coding.onrender.com/signupuser`,{
        method:'POST',
        body:JSON.stringify(allData),
        headers:{
            'Content-Type':'application/json',
        },
    });
    let data=await res.json()
    // console.log(data)
    } catch (error) {
        alert("Api failed")
    }
    
}

  return (
    <div className='signupContainer'>
        <h2>Welcome !</h2>
        <form  onSubmit={handleSubmit} className='formContainer'>
        <label htmlFor='userEmail' >Email</label>
        <input type="text"  name="email"  onChange = {(e) => handleInputChange(e)} placeholder='Enter your email' id='userEmail'/>
        <label htmlFor='userName'>User name</label>
        <input type="text"  name="userName" onChange = {(e) => handleInputChange(e)} placeholder='Enter your user name' id='userName'/>
        <label htmlFor='userPass'>Password</label>
        <input type="password"  name="password" onChange = {(e) => handleInputChange(e)} placeholder='Enter your Password' className='password'/>
        <label htmlFor='ConformPass'>Confirm Password</label>
        <input type="password"  name="confirmPassword" onChange = {(e) => handleInputChange(e)} placeholder='Confirm your Password' id='confirmPassword'/>
        <div className='btnCont'>
        <button className='formBtn' >Register</button>
        </div>
        <div className='footerLink'>
            <p>Already have an Account ?</p>
            <Link to="/login">Register</Link>
        </div>
        </form>
    </div>
  )
}

export default SignUp

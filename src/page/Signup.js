import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BiSolidShow } from "react-icons/bi";
import loginSignupImage from '../assest//login-animation.gif'
import { BiSolidHide } from "react-icons/bi";
import Login from './Login';
const Signup = () => {
  const [showPassword,setShowPassword]=useState(false)

  const [showConfirmPassword, setConfirmPassword] = useState(false);
const [data,setData]=useState({
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmPassword:""
})
console.log(data)
  const handleShowPassword=()=>
  {
    setShowPassword(prev=>!prev)
  }

  const handleShowConfirmPassword=()=>
  {
    setConfirmPassword(prev=>!prev)
  }

  const handleOnChange=(e)=>
  {
    
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    const{firstName,email,password,confirmPassword}=data

    if(firstName && email && password && confirmPassword)
    {
      if(password===confirmPassword)
      {
        alert('successfully!')
      }
      else{
        alert('password is not same!')
      }
    }
    else{
      alert('pleas enter required field')
    }
    
    
  }
  return (
    <div className="p-3 md:p-4">
      
      <div className="flex flex-col w-full max-w-sm p-4 m-auto bg-white">
        {/* <h1 className='text-2xl font-bold text-center'>Sign Up</h1> */}

        <div className="flex flex-col w-20 m-auto overflow-hidden rounded-full shadow-md m drop-shadow-md">
          <img src={loginSignupImage} className="w-full" />
        </div>

        <form className="flex flex-col w-full py-2" onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="">
            FirstName
          </label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="w-full px-2 py-1 mt-1 mb-2 bg-slate-200 focus-within:outline-blue-500"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="w-full px-2 py-1 mt-1 mb-2 bg-slate-200 focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>

          <input
            type={"email"}
            id="email"
            name="email"
            className="w-full px-2 py-1 mt-1 mb-2 bg-slate-200 focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>

          <div className="flex px-2 py-1 mt-1 mb-2 rounded bg-slate-200 focus-within:outline focus-within:outline-blue-300 ">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full border-none rounded outline-none focus-within:outline-blue- -200 bg-slate-200"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiSolidShow /> : <BiSolidHide />}
            </span>
          </div>
          <label htmlFor="confirmpassword">Confrim Password</label>

          <div className="flex px-2 py-1 mt-1 mb-2 rounded bg-slate-200 focus-within:outline focus-within:outline-blue-300 ">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmPassword"
              className="w-full border-none rounded outline-none focus-within:outline-blue- -100 bg-slate-200"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />

            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiSolidShow /> : <BiSolidHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] bg-red-500 hover:bg-red-600 cursor-pointer m-auto text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign UP
          </button>
        </form>

        <p className="mt-3 text-sm text-left">
          Already have an account?
          <Link to={"/login"}className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup

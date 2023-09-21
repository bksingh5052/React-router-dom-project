import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
  const navigation = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    if (formData.pass != formData.confirmPass) {
      toast.error("Password Not Matched");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    navigation("/dashboard");
  }
  function changeHandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const [showPass, setshowPass] = useState(false);
  const [cnfShowPass, setCnfShowPass] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    confirmPass: "",
  });

const [loginType, setLoginType] = useState("student")

  return (
    <div className="h-full">
      <div className="w-[50%] bg-gray-700 rounded-full py-1 flex justify-between px-2 text-neutral-400 mt-2">
        <button
         onClick={()=>setLoginType("student")}
         className={`py-2 rounded-full  px-4 ${loginType ==="student" ? "bg-black text-white":" bg-transparent"}`}>Student</button>
        <button
        onClick={()=>setLoginType("instructor")}
        className={`bg-black py-2 rounded-full px-4 ${loginType ==="instructor" ? "bg-black text-white ":" bg-transparent"} `}>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex gap-4">
          <label>
            <p   className='font-semibold'>
              First Name <sup className='text-lg text-red-600'>*</sup>
            </p>
            <input
             className='w-full py-3 px-4 rounded-md bg-gray-700 text-white opacity-100' 
              required
              autoComplete="on"
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="Enter First Name"
              onChange={changeHandler}
            />
          </label>
          <label>
            <p   className='font-semibold'>
              Last Name <sup className='text-lg text-red-600'>*</sup>
            </p>
            <input
             className='w-full py-3 px-4 rounded-md bg-gray-700 text-white opacity-100' 
              required
              autoComplete="on"
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Enter Last Name"
              onChange={changeHandler}
            />
          </label>
        </div>

        <label>
          <p   className='font-semibold mt-2'>
            Email Id <sup className='text-lg text-red-600'>*</sup>
          </p>
          <input
           className='w-full py-3 px-4 rounded-md bg-gray-700 text-white opacity-100' 
            required
            autoComplete="on"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={changeHandler}
          />
        </label>

        <div className="flex gap-4">
          <label className="relative">
            <p className='font-semibold mt-2'>
              Create Password <sup  className='text-lg text-red-600'>*</sup>
            </p>
            <input
             className='w-full py-3 px-4 rounded-md bg-gray-700 text-white opacity-100' 
              required
              autoComplete="on"
              type={showPass ? "text" : "password"}
              name="pass"
              value={formData.pass}
              placeholder="Enter Password"
              onChange={changeHandler}
            />
            <span 
            className='right-4 absolute top-12 text-2xl'
            onClick={() => setshowPass((prev) => !prev)}>
              {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label className="relative">
            <p  className='font-semibold mt-2'>
              Last Name <sup className='text-lg text-red-600'>*</sup>
            </p>
            <input
             className='w-full py-3 px-4 rounded-md bg-gray-700 text-white opacity-100' 
              required
              autoComplete="on"
              type={cnfShowPass ? "text" : "password"}
              name="confirmPass"
              value={formData.confirmPass}
              placeholder="Confirm Password"
              onChange={changeHandler}
            />
            <span
            className='right-4 absolute top-12 text-2xl'
             onClick={() => setCnfShowPass((prev) => !prev)}>
              {cnfShowPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>
        <button  className='mt-12 w-full bg-yellow-400 py-2 text-center rounded-md text-black'>Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;

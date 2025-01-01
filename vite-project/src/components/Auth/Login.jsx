import React, { useState } from 'react'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { useForm } from 'react-hook-form'

const Login = ({handleform}) => {
  const [pass, showpass] = useState(false)
  const show = () => {
    showpass(!pass)
  }
  const { register, handleSubmit, reset } = useForm();
  const handlefromSubmit = (data) => {
    // console.log(data.email)
    const {email,password} = data;
    handleform(email, password);
    reset()
  }

  return (
    <div className=' w-full h-screen flex items-center justify-center '>
      <div className='border-2 relative border-purple-400 px-[4%] py-[2.5%] '>
        <h1 className=' px-10 my-[2%]'>

          <label htmlFor="" className='text-3xl text-slate-500 py-[20%] '>Login HERE </label>
        </h1>
        <form onSubmit={handleSubmit(handlefromSubmit)} className='flex  flex-col mx-3 gap-6  py-[6%] px-[3%] text-black-500'>
          <input{...register('email')} className='text-gray-300 border-2  border-purple-400 outline-none rounded-full my-[4%] bg-transparent px-4 py-2 ' autoFocus required type='email' placeholder='Email' />
          <input {...register('password')} className={`text-gray-300 border-2   border-purple-400 outline-none rounded-full my-[3%] bg-transparent px-4 py-2 `} autoFocus required type={`${pass ? `text` : `Password`}`} placeholder='Password' />
          <div onClick={show} className=' z-999 absolute top-[56%] left-[70%]  '>

            {pass ? <FaRegEyeSlash /> : <FaRegEye></FaRegEye>}
          </div>
          <button className='rounded-full bg-purple-500 my-[3%]  px-4 py-2' type='submit'>Login</button>
        </form>

      </div>
    </div>
  )
}




export default Login;



{/* <div onClick={()=>show} className='bg-red-400 absolute top-[56%] left-[70%]  '> */ }
// eska matalb show dirctl likho

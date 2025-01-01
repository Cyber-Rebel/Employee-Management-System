import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
const CreateTask = () => {
  const [taskss,settasks]=useState({});
  const{register,handleSubmit,reset}= useForm();
  const handlesubmitfrom=(data)=>{
    console.log(data.Title)
    reset();
    settasks([{...data,active:false,newTaks:true,completed:false,failed:false}])

    const info=JSON.parse(localStorage.getItem('employees'))

        info.forEach(element => {
          // console.log(element.firstName)\
          if(element.firstName===data.Asingto){
            // console.log('')
            console.log(element.tasks)
            element.tasks.push(taskss)
            console.log()

          }
        });

      }


  return (
    <div>
             <div className=" bg-[#1c1c1c] rounded-lg w-[100%] mt-10">
  <h1 className="text-2xl font-bold text-center   p-4">Create New Post</h1>
  <form onSubmit={handleSubmit(handlesubmitfrom)} className="space-y-4 p-10 flex  gap-[20%]  justify-between items-center ">

    <div className='text-black flex flex-col gap-6 w-[50%] h-full'>
    <div>
      <label className="block text-sm font-medium text-white   ">Task Title</label>
      <input {...register('Title')}
        type="text"
        className="w-full px-3 py-2 border bg-transparent rounded-lg focus:outline-none  "
        placeholder="Enter title"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-white   ">Date</label>
      <input {...register('Date')}
        type="date"
        className="w-full px-3 py-2 border bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-white   ">Asing to</label>
      <input {...register('Asingto')}
        type="text"
        className="w-full px-3 py-2 border bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Asing to "
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-white   "> Category </label>
      <input {...register('Category')}
        type="text"
        className="w-full px-3 py-2 border bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Category"
      />
    </div>
    </div>
    <div className=' w-[50%]     h-full'>
     <div>
<label className="block text-sm font-medium mb-4 text-white   ">Description</label>
<textarea {...register('Description')}
  className="w-full h-64 px-3  py-2 border bg-transparent rounded-lg focus:outline-none "
  placeholder="Enter description"
></textarea>
</div> 
<button
      type="submit"
      className="w-full  bg-emerald-400  text-white py-2 px-4 rounded-lg hover:bg-emerald-700"
    >
      Creaate Task
    </button>
    </div>
  </form>
</div>
    </div>
  )
}

export default CreateTask
import React from 'react'

const Tasknumber = ({data}) => {
  return (
    <div className='flex mt-[5%] justify-between gap-4'>

    <div className='bg-red-400 w-[35%]  rounded-2xl h-32 px-[2%] py-[2%]'>
        <h1 className='text-3xl font-semibold'  >{data.taskCount.failed }</h1>
        <h1 className='text-3xl font-semibold'>Fail Task</h1>

    </div>
    <div className='bg-blue-400 w-[35%]  rounded-2xl h-32 px-[2%] py-[2%]'>
        <h1 className='text-3xl font-semibold'  >{data.taskCount.newTask}</h1>
        <h1 className='text-3xl font-semibold'>New Task</h1>

    </div> <div className='bg-green-400 w-[35%]  rounded-2xl h-32 px-[2%] py-[2%]'>
        <h1 className='text-3xl font-semibold'  >{data.taskCount.completed}</h1>
        <h1 className='text-3xl font-semibold'>Complete Task</h1>

    </div> <div className='bg-yellow-400 w-[35%]  rounded-2xl h-32 px-[2%] py-[2%]'>
        <h1 className='text-3xl font-semibold'  >{data.taskCount.active}</h1>
        <h1 className='text-3xl font-semibold'>Accect Task</h1>
    </div>
    </div>
  )
}

export default Tasknumber
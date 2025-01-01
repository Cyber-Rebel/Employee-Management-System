import React from 'react'

const FailTask = () => {
  return (
   <div className="bg-blue-300 rounded-md h-full w-[25%] p-[2%] shadow-black">
  <div className="flex justify-between items-center gap-[43%]">
    <h3 className="text-2xl bg-red-700 rounded px-4 py-2">{task.category}</h3>
    <h4 className="text-2xl font-bold">{task.date}</h4>
  </div>
  <h3 className="font-bold text-3xl mt-[9%]">{task.title}</h3>
  <p className="w-full mt-[5%] font-semibold  mb[2%] ">
  {task.description}
    </p>
    <div className='w-full mt-[6%] '>
        <button className='bg-sky-500 px-2 py-2 w-full rounded-md  '>Failed</button>
    </div>

</div>

  )
}

export default FailTask
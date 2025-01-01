import React from 'react'

const AccecptTask = ({task}) => {
  return (
    <div className="bg-red-300 rounded-md h-full w-[25%] p-[2%] shadow-black">
    <div className="flex justify-between items-center gap-[43%]">
      <h3 className="text-2xl bg-red-700 rounded px-4 py-2">{task.category}</h3>
      <h4 className="text-2xl font-bold">{task.date}</h4>
    </div>
    <h3 className="font-bold text-3xl mt-[9%]">{task.title}</h3>
    <p className="w-full mt-[5%] font-semibold  mb-[6%]">
     {task.description}
    </p>
    <div className="flex w-full justify-between items-center">
      <button className="bg-green-400 text-white px-4 py-2 rounded text-sm">
        Mark as Complete
      </button>
      <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">
        Mark as Failed
      </button>
    </div>
  </div>
  
  )
}

export default AccecptTask
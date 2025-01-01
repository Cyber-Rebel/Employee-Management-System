import React from 'react';

const AllTask = ({employess}) => {
  const { employee } = employess;

  return (
    <div>
      <div className='bg-[#1c1c1c] p-5 flex flex-col gap-3 w-full rounded mt-5'>
        <div className='bg-yellow-200 font-bold rounded flex justify-between items-center px-1 py-2'>
          <h3 className='text-black'>Employee Name</h3>
          <h3 className='text-black'>New Tasks</h3>
          <h3 className='text-black'>Active Tasks</h3>
          <h3 className='text-black'>Completed</h3>
          <h3 className='text-black'>Failed</h3>
        </div>

        {employee.map((emp, index) => (
          <div key={index} className='overflow-auto bg-red-400 w-full h-[100%]'>
            <div className='bg-yellow-200 font-bold rounded flex justify-between items-center px-4 py-2'>
              <h2 className='text-black'>{emp.firstName}</h2>
              <h3 className='text-black'>{emp.taskCount.newTask}</h3>
              <h3 className='text-black'>{emp.taskCount.active}</h3>
              <h3 className='text-black'>{emp.taskCount.completed}</h3>
              <h3 className='text-black'>{emp.taskCount.failed}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;

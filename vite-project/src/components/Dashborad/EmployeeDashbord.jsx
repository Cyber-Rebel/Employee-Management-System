import React from 'react'
import Headers from '../other/Header';
import Tasknumber from '../other/Tasknumber';
import Tasklist from '../Task/Tasklist';
import { useState } from 'react';

const EmployeeDashbord = ({DATAS}) => {
  // console.log(DATAS)



  return (
    // <div className='text-white'>EmployeeDashbord</div>
    <>
    <div className='p-[3%] bg-[#1c1c1c] w-full h-screen '>
    {<Headers  data={DATAS} />}
    {<Tasknumber data={DATAS} />}
{<Tasklist data={DATAS} />}


    </div>
    
    
    
    
    
    </>
  )
}

export default EmployeeDashbord;
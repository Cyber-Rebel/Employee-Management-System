import React from 'react'

const Header = ({data}) => {
  const loogout=()=>{
    // localStorage.removeItem('employee');
    // localStorage.removeItem('admin');
    window.location.href="/login";
    localStorage.clear();
  }
  return (
    <div>
<div className='flex justify-between items-center '>
    <h1 className='text-3xl text-white-500 font-semibold'> Hello   <span className='text-4xl font-bold'><br/> {data.firstName} 👋
        </span>  </h1>
    <div>
      <button onClick={()=> loogout()}className=' bg-red-700 rounded px-8 py-4'>Logout</button>
    </div>
  </div>

</div>





    
  )
}

export default Header
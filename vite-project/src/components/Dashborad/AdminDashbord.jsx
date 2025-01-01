import React, { useContext } from 'react'
import Headers from '../other/Header'
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';
import Authprovider, { AuthContext } from '../../context/Authprovider';

const AdminDashbord = ({DATAS}) => {
  const employes= useContext(AuthContext)
// console.log(employes)

  return (
    <div className='w-full h-screen p-[4%] '>
    {<Headers  data={DATAS} />}

        {<CreateTask/>}
         {<AllTask employess={employes}/>}  

   

    </div>
  )
}

export default AdminDashbord;





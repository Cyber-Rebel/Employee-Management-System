import React from 'react'
import FailTask from './FailTask'
import AccecptTask from './AccecptTask'
import NewTask from './NewTask'
import { CompleteTask } from './CompleteTask'
const Tasklist = ({data}) => {


  return (
    <div id='hidescroll' className=' overflow-x-scroll  w-full flex  gap-10 flex-nowrap  shrink-0  h-[50%] p-4 mt-[10%]'>
        
{/*         
        <FailTask  />
        <AccecptTask/>
        <NewTask />
        <CompleteTask/> */}

{data.tasks.map((task,index) =>{

console.log(task)

    if(task.active){
      return <AccecptTask key={index} task={task}/>
    }
    if(task.failed){
      return <FailTask key={index} task={task}/>
    }
    if(task.completed){
      return <CompleteTask key={index} task={task}/>
    }
    if(task.new){
      return <NewTask key={index} task={task}/>
    }
})}


        




    </div>
  )
}

  
export default Tasklist
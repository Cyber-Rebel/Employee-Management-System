import React, { createContext } from 'react'

import { getLocalStorage, setLocalStorage } from '../utils/Localstorge';
import { useState,useEffect } from 'react';


export const AuthContext =  createContext(); 
const Authprovider= ({children}) => {
  const[datas , setdatas]=useState(null)

  useEffect(() => {
    setLocalStorage();
    const {employee,admin} = getLocalStorage();
    setdatas({employee,admin})
   
  }, [])
  
  return (   
    <div>
    <AuthContext.Provider  value={datas} >
      {children}
    </AuthContext.Provider>
    </div>

  )
}

export default Authprovider;
import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'

export const Logout = () => {
  const[authUser,setAuthUser]=useAuth()
  const handlLogout = ()=>{
    try {
     // Logout.jsx
       setAuthUser(null);
      localStorage.removeItem("users");
      toast.success("Logout successfully");
     
    } catch (error) {
      toast.error("Error:" + error.message)
      
    }
  }
  return (
    <div>
      <button className="px-2 py-1 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handlLogout}>
      Logout
      </button>
    </div>
  )
}

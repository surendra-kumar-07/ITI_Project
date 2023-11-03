import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {login, logout} from '../../feachers/authSlice'
import {Loading} from '../../components/index.js'
import {AdminHeader} from '../../components/index.js'
import { Outlet } from 'react-router-dom'




const Dashboard = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   authService.getCurrentUser()
  //   .then((userData)=> {
  //     if(userData){
  //       dispatch(login({userData}))
  //     }else{
  //       dispatch(logout())
  //     }
  //   }).catch((err)=>{console.log("Error in getCurrntUser ", err);})
  //   .finally(()=>setLoading(false))
  // }, [])
  


  return !loading ? (
            <>
            <AdminHeader />
          <Outlet />
            </>

  ) : (<Loading/>)
}

export default Dashboard
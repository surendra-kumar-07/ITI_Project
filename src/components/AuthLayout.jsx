import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import {Loading} from './index'

export default function Protected({children, authentication = true}) {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const authStatus = false
    // useSelector((state)=> state.auth.status)

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/admin-panel-login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/admin-dashboard")
        } 
        setLoading(false)
    }, [authStatus, navigate, authentication])




    return !loading ? (
          <>
          {children}
           <Outlet />
           </>
    ) : (<Loading />)
}
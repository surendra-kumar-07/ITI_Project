import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from './index'

export default function Protected({children, authentication = true}) {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector((state)=> state.auth.status)

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/adminpanel")
        } else if(!authentication && authStatus !== authentication){
            navigate("/adminpanel/dashboard")
        } 
        setLoading(false)
    }, [authStatus, navigate, authentication])




    return !loading ? (
          <>
          {children}
           </>
    ) : (<Loading />)
}
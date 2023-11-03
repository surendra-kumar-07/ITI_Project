import React from 'react'
import { logout } from '../../feachers/authSlice' 
import { useDispatch, useSelector } from 'react-redux'
import authService from '../../appwrite/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Logout = ({className='', ...props}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const sessionId = useSelector((state)=>state.auth.session?.$id)

  const logoutHandle = async ()=>{
    try {
      let res = await authService.logout(sessionId)
      if(res){
        dispatch(logout())
        toast.success("Logout")
        setTimeout(() => {
          navigate("/admin-panel-login")
        }, 500);
      }else{
        toast.error("logout failed!")
      }
    } catch (error) {
      toast.error("logout failed!")
      console.log(error);
    }
  }

  return (
    <button className={`${className}`} {...props} onClick={logoutHandle}>Logout</button>
  )
}

export default Logout
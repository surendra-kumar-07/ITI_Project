import React, {useState} from 'react'
import {Input} from '../index'
import { useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'
import {login as authLogin} from '../../feachers/authSlice'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {Button} from '../index'
import { toast } from 'react-toastify'



const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit,formState: { errors }} = useForm()


  const login = async (data)=>{
    try {
     const session = await authService.login(data)
     if(session){
      const userData = await authService.getCurrentUser()
      if(userData){
        dispatch(authLogin({session,userData}))
        toast.success("Login Successfully")
        setTimeout(() => {
          navigate("/admin-dashboard")
        }, 500);
      }
     }else{
      toast.error("Somthing went wrong!")
     }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
     <div className='w-full h-screen bg-black/10'>
        <div className='flex justify-center items-center h-full'>
        <div className='w-full m-3 md:w-1/4 p-3 -mt-48'>
            <div className='mb-3 text-center font-bold text-lg text-blue-600'>
                Admin Panel 
            {/* {errors && <p className='text-red-600 text-center text-base'>{errors?.email?.message}</p>} */}
            </div>
            <form onSubmit={handleSubmit(login)} className='space-y-4'>
                <Input placeholder='Enter Username' type="email"
                {...register("email",{
                  required: true,
                  validate: {
                    matchPatern: (value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                  }
                })}
                
                />
                  
                <Input placeholder='Enter Password' type="password" required 
                {...register("password",{
                  required: true,
                })}
                />
                
                <Button type='submit' className='w-full' btnName="Login" />
            </form>
        </div>
     </div>
     </div>
    </>
  )
}

export default LoginForm
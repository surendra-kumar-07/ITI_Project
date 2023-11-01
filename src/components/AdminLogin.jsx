import React from 'react'

const AdminLogin = () => {
  return (
    <>
     <div className='w-full h-screen bg-black/10'>
        <div className='flex justify-center items-center h-full'>
        <div className='w-full m-3 md:w-1/4 p-3 -mt-48'>
            <div className='mb-3 text-center font-bold text-lg text-blue-600'>
                Admin Panel
            </div>
            <form className='space-y-4'>
                <input className='bg-white rounded-md w-full p-2 outline-none' type="text" placeholder='Enter Username'/>
                <input className='bg-white rounded-md w-full p-2 outline-none' type="password" placeholder='Enter Password'/>
                <button type='submit' className='w-full bg-blue-400 text-white font-bold py-2 rounded-xl'>Login</button>
            </form>
        </div>
     </div>
     </div>
    </>
  )
}

export default AdminLogin
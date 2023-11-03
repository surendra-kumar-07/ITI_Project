import React from 'react'
import {GrSearch} from 'react-icons/gr'
import blog_img from "../../assets/blog_img.jpg"

const AllPost = ({admin}) => {
  return (
    <>
    <div className='w-full min-h-screen bg-black/10 pb-10 pt-2'>
        <div className=' flex justify-center'>
            <div className='md:w-1/2 w-full'>
            <div className='m-2 relative'>
                <input className='outline-none bg-white rounded p-2 w-full
                ' type="text" placeholder='Search'/>
                <div className='absolute top-1/2 -translate-y-1/2 right-2 border-l-2 p-1 pl-3 cursor-pointer'>
                <GrSearch className='text-xl ' />
                </div>
                </div>

                <div className='mt-5 bg-white p-2 py-5 rounded-lg space-y-10'>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className=' rounded'>
                            <img className='w-full rounded-md md:w-60' src={blog_img} alt="" />
                        </div>
                        <div className=''>
                            <h1 className='font-semibold underline mb-1  cursor-pointer'>Tomorrow hollidat due to Tomorrow hollidat due to deepawali... </h1>
                            <span className='text-sm'>6dhfdf fd20220</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className=' rounded'>
                            <img className='w-full rounded-md md:w-60' src={blog_img} alt="" />
                        </div>
                        <div className=''>
                            <h1 className='font-semibold underline mb-1  cursor-pointer'>Tomorrow hollidat due to Tomorrow hollidat due to deepawali... </h1>
                            <span className='text-sm'>6dhfdf fd20220</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className=' rounded'>
                            <img className='w-full rounded-md md:w-60' src={blog_img} alt="" />
                        </div>
                        <div className=''>
                            <h1 className='font-semibold underline mb-1  cursor-pointer'>Tomorrow hollidat due to Tomorrow hollidat due to deepawali... </h1>
                            <span className='text-sm'>6dhfdf fd20220</span>
                        </div>
                    </div>
                    
                    
                </div>
            
            </div>
        </div>
    </div>
    </>
  )
}

export default AllPost
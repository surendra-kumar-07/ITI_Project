import React, { useState } from 'react'
import { GiHamburgerMenu} from 'react-icons/gi';
import {RxCross2} from 'react-icons/rx';
import {Logo} from './index'


const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    const navOptions = [
        {
            name: "Home",
            slug: "/",
        },
        {
            name: "About",
            slug: "/",
        },
        {
            name: "ITI",
            slug: "/",
        },
        {
            name: "Librery",
            slug: "/",
        },
        {
            name: "Contact Us",
            slug: "/",
        }
    ]



  return (
    <>
    {/* header */}
   <div className='bg-white w-full p-2 flex justify-between items-center select-none md:px-20 shadow-md shadow-indigo-500/40 sticky top-0 z-10'>
   <Logo/>
  <div>
    <nav className={`absolute h-screen w-60 top-0 right-0 pt-20 bg-white/95 ${menuToggle?'':'hidden'} md:static md:block md:w-auto md:h-auto md:p-0 md:bg-transparent`}>
        <ul className='flex flex-col items-center w-full space-y-3 font-bold md:flex-row md:space-y-0 md:space-x-6 text-blue-700'>
            <li className='cursor-pointer'>Home</li>
            <li>Add Post </li>
            <li>contact us</li>
            <li>About us</li>
            {/* <li>
                <NavLink to="/" className={({isActive})=>`${isActive ? 'text-orange-700': 'text-gray-600'}`}>
                </NavLink>
            </li> */}
        </ul>
    </nav>
    <div className='relative z-30 cursor-pointer py-1 px-2 rounded md:hidden' onClick={()=>{setMenuToggle((pre)=> !pre)}} >
        {!menuToggle? <GiHamburgerMenu className='text-3xl text-gray-500'/>: <RxCross2 className='text-3xl text-gray-500'/>}
    </div>
  </div>
   </div>

   
   
  
   
   </>
  )
}

export default Header
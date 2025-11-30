import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const {user} = useUser()
  const {openSignIn} = useClerk()

  const navigate = useNavigate()

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between 
                    px-6 md:px-16 lg:px-36 py-5 '>

      {/* Logo */}
      <Link to="/" className='max-md:flex-1'>
        <img src={assets.logo} alt="logo" className='w-36 h-auto' />
      </Link>


      {/* Mobile Menu */}
      <div
        className={`
          max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50
          flex flex-col md:flex-row items-center max-md:justify-center
          gap-8  py-3 max-md:h-screen md:border px-8 md:border-gray-600
           bg-black/70 backdrop-blur rounded-3xl overflow-hidden
           transition-all duration-300 
          ${isOpen ? "max-md:w-full" : "max-md:w-0 max-md:p-0"}
        `}
      >
        {/* Close icon (mobile) */}
        <XIcon
          className='absolute top-6 right-6 w-6 h-6 cursor-pointer md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        />

        <Link onClick={() =>{ scrollTo(0,0) ; setIsOpen(false)}}  to='/' className="text-lg font-medium">Home</Link>
        <Link onClick={() =>{ scrollTo(0,0) ; setIsOpen(false)}} to='/movies' className="text-lg font-medium">Movies</Link>
        <Link onClick={() =>{ scrollTo(0,0) ; setIsOpen(false)}} to='/' className="text-lg font-medium">Theaters</Link>
        <Link onClick={() =>{ scrollTo(0,0) ; setIsOpen(false)}} to='/' className="text-lg font-medium">Releases</Link>
        <Link onClick={() =>{ scrollTo(0,0) ; setIsOpen(false)}} to='/favourite' className="text-lg font-medium">Favourites</Link>
      </div>


      {/* Search Icon */}
      <div className='flex items-center gap-8'>
      <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />

{  !user ?(
      <button onClick={openSignIn} className='px-4 py-1 sm:px-7 sm:py-2 bg-red-700 hover:bg-red-500 
                         transition rounded-full font-medium cursor-pointer'>
        Login
      </button>) :( 
        <UserButton >
        <UserButton.MenuItems>
            <UserButton.Action  label='My Bookings' labelIcon = {<TicketPlus width ={15}/>} onClick={()=>{navigate('/mybookings') }}/>
            </UserButton.MenuItems>    
        </UserButton>
            ) }

</div>
      {/* Mobile Menu Icon */}
      <MenuIcon
        className='md:hidden w-8 h-8 cursor-pointer'
        onClick={() => setIsOpen(!false)}
      />

    </div>
  )
}

export default Navbar

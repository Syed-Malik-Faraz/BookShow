// import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'
// import React from 'react'
// import { assets } from '../../assets/assets'
// import { Link, NavLink } from 'react-router-dom'

// const AdminSidebar = () => {

// const user = {
// firstName: 'Admin' ,
// lastName: 'User' ,
// imageUrl: assets.profile,
//  }
 
//  const adminNavLinks =[
// {name:' Dashboard' , path: '/admin' , icon: LayoutDashboardIcon} , 
// {name:'Add Shows', path:'/admin/add-shows ', icon: PlusSquareIcon } ,
// {name: 'List Shows', path:'/admin/list-shows' , icon: ListIcon } ,
// {name: 'List Bookings', path:' /admin/list-bookings ' ,icon:ListCollapseIcon } ,
//  ]
 
//  return (
//     <div className='h-screen md:flex flex-col  items-center pt-8 max-w-12 md:max-w-60 w-full border-r text-sm border-gray-800'>
// {/* <h1>Sidebar</h1> */}
// <img className='h-9 md:h-14 w-9 md:w-14  rounded-full  mx-auto' src={user.imageUrl}  alt='sidebar'/>
// <p className='mt-2 text-base  max-md:hidden'>{user.firstName}{user.lastName}</p>
    
//     <div className='w-full'>
// {adminNavLinks.map((link, index)=>(
// <NavLink key={index} to={link.path} end className={({isActive})=>`relative flex items-center max-md:justify-center min-md:pl-10 gap-2 w-full py-3 text-gray-400 ${isActive && 'bg-red-400 text-gray-500 group'}`}>

// {({isActive})=>(
// <>
// <link.icon className='w-5 h-5' />
// <p className='max-md:hidden'> {link.name}</p>
// <span className={`w-2 h-10 rounded-l right-0 absolute ${isActive && 'bg-red-400'}`}>

// </span>

// </>

// )}

// </NavLink>
// ))}
//     </div>
    
//     </div>
//   )
// }

// export default AdminSidebar




import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'
import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {

  const user = {
    firstName: 'Admin',
    lastName: 'User',
    imageUrl: assets.profile,
  }

  const adminNavLinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon },
    { name: 'Add Shows', path: '/admin/add-shows', icon: PlusSquareIcon },
    { name: 'List Shows', path: '/admin/list-shows', icon: ListIcon },
    { name: 'List Bookings', path: '/admin/list-bookings', icon: ListCollapseIcon },
  ]

  return (
    <div className='h-screen md:flex flex-col items-center pt-8 max-w-12 md:max-w-60 w-full border-r text-sm border-gray-800'>
      
      <img className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto ' src={user.imageUrl} alt='sidebar' />
      <p className='mt-2 text-base max-md:hidden'>{user.firstName} {user.lastName}</p>

      <div className='w-full mt-10'>
        {adminNavLinks.map((link, index) => (
        //   <NavLink
        //     key={index}
        //     to={link.path}
        //     end
        //     className={({ isActive }) =>
        //       `relative flex items-center max-md:justify-center md:pl-10 gap-2 w-full py-3 
        //       ${isActive ? 'bg-red-400 text-white' : 'text-gray-400'}`
        //     }
        //   >
        //     <link.icon className='w-5 h-5' />
        //     <p className='max-md:hidden'>{link.name}</p>

        //     {/** active indicator bar */}
        //     {({ isActive }) =>
        //       isActive && (
        //         <span className='w-2 h-10 rounded-l right-0 absolute bg-red-400'></span>
        //       )
        //     }
        //   </NavLink>
        



        <NavLink key={index} to={link.path} end>
  {({ isActive }) => (
    <div
      className={`relative flex items-center   max-md:justify-center md:pl-10 gap-2 w-full py-3 
      ${isActive ? 'bg-red-400 text-white   border-r-[0.3rem] border-red-600 rounded-r' : 'text-gray-400   '}`}
    >
      <link.icon className="w-5 h-5" />
      <p className="max-md:hidden  ">{link.name}</p>

      {isActive && (
        <span className="w-2 h-10 rounded-l right-0  absolute bg-red-400"></span>
      )}
    </div>
  )}
</NavLink>





//         <NavLink 
//   key={index}
//   to={link.path}
//   end
//   className={({ isActive }) =>
//     `relative flex items-center max-md:justify-center md:pl-10 gap-2 w-full py-3 
//      ${isActive ? 'bg-red-400 text-white' : 'text-gray-400'}`
//   }
// >
//   <link.icon className='w-5 h-5' />
//   <p className='max-md:hidden'>{link.name}</p>

//   {/* Active bar */}
//   <span
//     className={`w-2 h-10 rounded-l right-0 absolute ${
//       isActive ? 'bg-red-400' : ''
//     }`}
//   />
// </NavLink>

        
        ))}
      </div>

    </div>
  )
}

export default AdminSidebar

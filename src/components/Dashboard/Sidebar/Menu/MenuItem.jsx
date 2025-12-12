/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router'

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#9435E740]   hover:text-[#9435E7] ${
          isActive ? 'bg-[#9435E740]  text-[#9435E7]' : 'text-gray-600'
        }`
      }
    >
      <Icon className='w-5 h-5 '  />

      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
  )
}

export default MenuItem

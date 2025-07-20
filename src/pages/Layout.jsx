import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'

const Layout = () => {

  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  return (
    <div className='flex flex-col items-start justify-start h-screen'>
      <Sidebar />
        <Outlet />
    </div>
  )
}

export default Layout
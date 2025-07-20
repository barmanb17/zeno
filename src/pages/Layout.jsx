import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)

  return (
    <div className='flex h-screen'>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebar(!sidebar)}
          className="p-2 rounded-lg bg-white shadow-lg border border-gray-200"
        >
          {sidebar ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebar && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebar(false)} />
          <div className="relative">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        <main className='flex-1 p-4 md:p-6 overflow-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../../../layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../../layouts/Footer'

const ElectronicsLayouts = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ElectronicsLayouts
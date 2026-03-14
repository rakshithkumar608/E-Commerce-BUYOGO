import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../../../layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../../layouts/Footer'
import ElectronicsStyles from '../components/ElectronicsStyles'

const ElectronicsLayouts = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <ElectronicsStyles />
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 industrial-bg">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default ElectronicsLayouts
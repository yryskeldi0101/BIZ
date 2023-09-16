import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import AdminHeader from '../components/header/AdminHeader'

const AdminLayout = () => {
  return (
    <>
    <AdminHeader />
    <main>
        <Outlet/>
    </main>
   <Footer/>
    </>
  )
}

export default AdminLayout
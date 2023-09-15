import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'

const GuestLayout = () => {
  return (
    <>
      <main><Outlet/></main>
      <Footer/>
    </>
  )
}

export default GuestLayout

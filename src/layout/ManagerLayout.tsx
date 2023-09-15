import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'

const ManagerLayout = () => {
  return (
    <>
    <header>ManagerRoute</header>
    <main><Outlet/></main>
    <Footer/>
    </>
  )
}

export default ManagerLayout
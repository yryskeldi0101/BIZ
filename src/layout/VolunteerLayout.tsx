import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'

const VolunteerLayout = () => {
  return (
    <>
    <header>VolunteerLayout</header>
    <main><Outlet/></main>
    <Footer/>
    </>
  )
}

export default VolunteerLayout
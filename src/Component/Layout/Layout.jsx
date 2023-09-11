import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
export default function Layout() {
  return <>
    <Header/>
  <div className='mt-5'></div>
    <Outlet/>
    <Footer/>
      </>
}

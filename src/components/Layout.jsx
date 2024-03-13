import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  
  // Use of Layout or Outlet is to keep the Header for all the Pages
  return (
    <>
    <Header/>
    <Outlet /> 
    </>
  )
}

export default Layout;
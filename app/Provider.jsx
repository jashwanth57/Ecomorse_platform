"use client"
import React from 'react'
import AppContextProvider from './(context)/AppContext'
import Header from './(components)/Header'
import Footer from './(components)/Footer'

function Provider({children}) {
  return (
   <AppContextProvider>
    <Header />
       {children}
       <Footer />
   </AppContextProvider>
  )
}

export default Provider
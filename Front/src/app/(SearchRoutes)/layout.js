import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import { Container } from 'postcss'
import React, { Fragment } from 'react'

function SearchRoutesLayout({children}) {
  return (
    <section className="bg-slate-100 pb-3">
        <NavBar/>
        {children}
        <Footer/>
    </section>
  )
}

export default SearchRoutesLayout
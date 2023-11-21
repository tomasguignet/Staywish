import Footer from '@/components/Footer/Footer'
import HomePhoto from '@/components/HomePhoto/HomePhoto'
import NavBar from '@/components/NavBar/NavBar'
import SearchBar from "@/components/SearchBar/SearchBar"
import React from 'react'

function Home() {

  return (
      <section className='bg-zinc-950 pb-3'>
        <NavBar/>
        <SearchBar/>
        <HomePhoto/>
        <Footer/>
      </section>
  )
}

export default Home
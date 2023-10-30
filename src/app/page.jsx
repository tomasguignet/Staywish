import HomePhoto from '@/components/HomePhoto/HomePhoto'
import NavBar from '@/components/NavBar/NavBar'
import SearchBar from "@/components/SearchBar/SearchBar"
import React from 'react'

function Home() {
  return (
    <>
      <section className='bg-zinc-950 '>
        <NavBar/>
        <SearchBar/>
        <HomePhoto/>
      </section>
    </>
  )
}

export default Home
import SearchBar from '@/components/SearchBar/SearchBar'
import React from 'react'

function SearchBarLayout({children}) {
  return (
    <>
      <SearchBar/>
      {children}
    </>
  )
}

export default SearchBarLayout
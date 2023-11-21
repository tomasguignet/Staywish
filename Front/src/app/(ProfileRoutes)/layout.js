import Footer from '@/components/Footer/Footer'
import React from 'react'

function ProfileRoutesLayout({children}) {
  return (
    <section className='bg-slate-200 pb-3'>
      {children}
      <Footer/>
    </section>
  )
}

export default ProfileRoutesLayout
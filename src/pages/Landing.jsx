import React from 'react'
import Header from '../components/blocks/layout/header/header'
import Popular from '../components/blocks/home/pouplar/popular'
import Body from '../components/blocks/home/body/body'
import Footer from '../components/blocks/layout/Footer/footer'

const Landing = () => {
  return (
    <>
        <Header />
        <Popular />
        <Body />
        <Footer/>
    </>
  )
}

export default Landing
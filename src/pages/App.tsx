import Banner from "../../components/Banner"
import Footer from '../../components/Footer'
import OurServices from '../../components/OurServices'
import OurTeam from '../../components/OurTeam'
import Technologies from '../../components/Technologies'
import WhyUs from '../../components/WhyUs'
import Navbar from '../../components/navbar'
import { Container } from '@mui/material'
import React from 'react'
// import styles from '@/styles/Home.module.css'
const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Banner />
        <Technologies />
        <WhyUs />
        <OurServices />
      </Container>
      <Container maxWidth="lg">
        <OurTeam />
      </Container>
      <Footer />
    </>
  )
}

export default App
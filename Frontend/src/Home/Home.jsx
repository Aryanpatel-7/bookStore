import React from 'react'
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Freebook from '../Components/Freebook';
const Home = () => {
  return (
    <>
    <div className='text-bold text-3xl'>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </div>
    </>
  )
}

export default Home;
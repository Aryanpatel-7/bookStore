import React from 'react'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='text-bold text-3xl'>
      <Navbar />
      <Banner />
      <Footer />
    </div>
  )
}

export default App;
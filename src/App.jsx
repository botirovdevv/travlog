import React from 'react'
import Navbar from './components/header/Navbar'
import Banner from './components/header/Banner'
import About from './components/main/About'
import Destinations from './components/main/Destinations'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Destinations/>
    </div>
  )
}

export default App
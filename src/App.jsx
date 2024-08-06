import React from 'react'
import Navbar from './components/header/Navbar'
import Banner from './components/header/Banner'
import About from './components/main/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
    </div>
  )
}

export default App
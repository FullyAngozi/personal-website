import { useState } from 'react'
import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Contact from './components/Contact'
import { Routes, Route} from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" w-full h-full">
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/Experience' element={<Experience />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
 
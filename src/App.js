import React from 'react'
import {BrowserRouter as Router , Route , Routes, Form} from "react-router-dom"
import Navbar from './components/Navbar'
import Card from './components/Card'
import Home from './components/Home'
import Learn from './components/Learn'
import Contact from './components/Contact'
 


const App = () => {
  return (
    <div>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/learn' element={<Learn/>}/>
    <Route path='/home' element={<Home/>}/>
      <Route path='/card' element={<Card/>}/>
      <Form/>
      <Contact/>
    </Routes>
    </Router>

    </div>
  )
}

export default App

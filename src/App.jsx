import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './components/services/Services'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Courses from './pages/courses/Courses'
import About from './pages/about/About'
import Home from './pages/home/Home'


const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/about" element={<About />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="sign-up" element={<SignUp />} />
  </Routes>
)

const App = () => {
  return (
    <Router>
      {routes}
    </Router>
  )
}

export default App



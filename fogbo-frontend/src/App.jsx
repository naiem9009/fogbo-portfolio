import { useState } from 'react'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.component'
import Home from './pages/Home.page'
import BlogPage from './pages/Blog.page'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route path='' element={<Home />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:id' element={<Blog />} />

          

        </Route>
        
      </Routes>
      <Footer />
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Contact from './components/pages/Contact/Contact'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'



function App() {
  return (
   <BrowserRouter>
   <>
    <div className ="container">

      <Header/ >
      <Nav />
      <main>Hello react, rest of the page here!
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
     </main>
     <Footer />
     
    </div>
    </>

   </BrowserRouter>
  )
}

export default App
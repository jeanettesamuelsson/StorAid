import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Contact from './components/pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Subscribe from './components/Subscribe'
import ServicesPage from './components/pages/Services/ServicesPage'
import Booking from './components/pages/Booking/Booking'



function App() {
  return (
   <BrowserRouter>
   <>
    <div className ="container">

      <Header/ >
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<Booking />} />
        </Routes> 
     </main>
     <Subscribe />
     <Footer />

    </div>
    </>

   </BrowserRouter>
  )
}

export default App
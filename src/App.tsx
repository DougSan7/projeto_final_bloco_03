import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
            <div className="h-[85vh]">

              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/categorias" element={<h1>Categorias</h1>} />
                    <Route path="/produtos" element={<h1>Produtos</h1>} />
              </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

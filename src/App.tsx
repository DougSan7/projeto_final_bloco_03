import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListaCategorias from './components/categorias/listarCategorias/ListarCategoria'
import FormCategoria from './components/categorias/formCategorias/FormCategoria'
import DeletarCategoria from './components/categorias/deletarCategorias/DeletarCategoria'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="h-[85vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategorias" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

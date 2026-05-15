import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <div className='h-[30vh]'></div>
    <Footer/>
    </>
  )
}

export default App

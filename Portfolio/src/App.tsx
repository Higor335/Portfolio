import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Sobre from './components/Sobre'

function App() {

  return (
    <>
      <div className='container'>
        <Header></Header>
        <Inicio></Inicio>
        <Sobre></Sobre>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App

import './App.css'
import Contato from './components/contato/contato'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Personas from './components/personas/Personas'
import Sobre from './components/Sobre/Sobre'
import Solucao from './components/solucao/Solucao'

function App() {

  return (
   <>
   <Navbar />
   <Hero/>
   <Sobre/>
   <Solucao/>
   <Personas/>
   <Contato/>
   </>

  )
}

export default App

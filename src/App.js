import Contact from './Components/Contact';
import Header from './Navbar/Header';
import Hero from './Components/Hero';
import { BrowserRouter } from "react-router-dom"
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Dummy from './Components/dummy'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Hero />
        <Skills />
        <Contact />
        <Footer />
        <Dummy />

      </BrowserRouter>
    </div>
    // <div className='bg-dark'>
    //   <Header />
    //   <Hero />
    //   
    // </div>
  )

}

export default App;

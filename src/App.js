import { BrowserRouter } from "react-router-dom"
import Header from './Navbar/Header';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
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

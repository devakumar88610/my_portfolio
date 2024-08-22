import { BrowserRouter } from "react-router-dom"
import Header from './Navbar/Header';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Portfolio from "./Pages/Portfolio";
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import background from './assets/Images/background.jpg'

function App() {
  return (
    <div >
      <div className="fixed w-full h-full bg-no-repeat bg-cover opacity-70 -z-50" style={{ backgroundImage: `url(${background})` }} />
      <BrowserRouter>
        <Header />
        <Hero />
        {/* <Slicker /> */}
        <About />
        {/* <Skills /> */}
        <Portfolio />
        <Contact />
        <Footer />
      </BrowserRouter >
    </div >
    // <div className='bg-dark'>
    //   <Header />
    //   <Hero />
    //   
    // </div>
  )

}

export default App;

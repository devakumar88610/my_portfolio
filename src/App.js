import { BrowserRouter } from "react-router-dom"
import Header from './Navbar/Header';
import Hero from './Pages/Hero';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Dummy from './Components/dummy'
import ScrollToTop from './Components/ScrollToTop';
import ImageSlick from './Components/ImageSlick';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Hero />
        <Skills />
        <Contact />
        <Footer />
        {/* <ImageSlick /> */}
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

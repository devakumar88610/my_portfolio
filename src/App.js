import Contact from './Components/Contact';
import Header from './Navbar/Header';
import Hero from './Components/Hero';
import { BrowserRouter } from "react-router-dom"
import Footer from './Components/Footer';
import Skills from './Components/Skills';
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
        <ScrollToTop />
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

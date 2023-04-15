
import Contact from './Components/Contact';
import Header from './Navbar/Header';
import Hero from './Components/Hero';
import NavMob from './Navbar/NavMob'
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />

      <NavMob />
      <Contact />-
    </BrowserRouter>
    // <div className='bg-dark'>
    //   <Header />
    //   <Hero />
    //   
    // </div>
  )

}

export default App;

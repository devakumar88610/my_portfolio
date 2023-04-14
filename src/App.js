
import Contact from './Components/Contact';
import Header from './Navbar/Header';
import Hero from './Components/Hero';
import OnePage from './Components/OnePage';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Contact />
      <Routes>
        <Route exact path="/one-page/:id" element={<OnePage />} />
      </Routes>

    </BrowserRouter>
    // <div className='bg-dark'>
    //   <Header />
    //   <Hero />
    //   
    // </div>
  )

}

export default App;

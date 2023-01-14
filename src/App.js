
import Contact from './Components/Contact';
import Header from './Navbar/Header';
import Hero from './Components/Hero';
// import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Hero />
    //   <Routes>
    //     <Route path='contact' element={<Contact />} />
    //   </Routes>

    // </BrowserRouter>
    <div>
      <Header />
      <Hero />
      <Contact />
    </div>
  )

}

export default App;

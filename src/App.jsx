import { useState } from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Subcontent from './Subcontent.jsx'
import Footer from './Footer.jsx'


function App() {
 
  const [openMobile, setMobileMenu] = useState(true);

  return (
    <>
      <Header 
        openMobile={openMobile} 
        setMobileMenu={setMobileMenu}
      />
      <Hero openMobile={openMobile}/>
      <Subcontent/>
      <Footer/>
    </>
  )
}

export default App

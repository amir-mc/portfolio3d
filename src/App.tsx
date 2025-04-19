import './App.css'
import Navbar from './components/navbar'
import ContactUs from './section/contact'
import Experience from './section/experiancesection'
import Featuresec from './section/featuresection'
import Footer from './section/footer'
import Hero from './section/hero'
import Showcase from './section/showcase'

function App() {


  return (
   <main>
      <Navbar/>
      <Hero/>
      <Showcase/>
      <Featuresec/>
      <Experience/>
      <ContactUs/>
      <Footer/>
   </main>
  )
}

export default App

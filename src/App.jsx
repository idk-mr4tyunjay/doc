import Ready from "./Ready"
import About from "./components/About"
import Cursor from "./components/Cursor"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Cursor />
      <Feature />
      <Ready />
      <Footer />
    </div>
  )
}

export default App

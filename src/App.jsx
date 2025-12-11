import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/home"
import Contact from "./Pages/Contact/contact"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import { useState } from "react"
import WelcomeModal from "./components/welcomeModal/welcomeModal"
import About from "./Pages/About/about"
import GalleryPage from "./Pages/Gallery/gallery"


function App() {
  const [username, setUsername] = useState("");
  return (
    <>
      {!username && <WelcomeModal onSubmit={setUsername} />}
      
      <Navbar username={username} />
      <div>
        <Routes>
          <Route index path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

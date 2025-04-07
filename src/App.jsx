import './App.css'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Video from './pages/PlayVideo.jsx'

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="container" style={{minHeight: "80vh"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/play_video" element={<Video />} />
        </Routes>
      </main>
      <Footer />
      <a href="#" className="go-to-top">
        <img src="/icons/circle-up-regular.svg" alt="go-top-icon" />
      </a>
    </MovieProvider>
  )
}

export default App

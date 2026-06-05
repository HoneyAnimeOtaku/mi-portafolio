import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Games from './components/Games'
import Contact from './components/Contact'
import CertificationsPage from './components/CertificationsPage'

function Home() {
  return (
    <div style={{ background: '#05020f', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Certifications />
      <Skills />
      <Games />
      <Contact />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificaciones" element={<CertificationsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
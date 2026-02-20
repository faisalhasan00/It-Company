import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

function useTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [theme, setTheme] = useState(localStorage.getItem("theme") || (prefersDark ? "dark" : "light"))

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("theme-dark")
      document.documentElement.classList.add("dark")
    } else {
      document.body.classList.remove("theme-dark")
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  return [theme, setTheme]
}

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return null;
}

function App() {
  const [theme, setTheme] = useTheme()
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <Router>
      <ScrollToHash />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LANDING from './components/LANDING';
import PORTFOLIOPAGE from './components/PORTFOLIOPAGE';
import KODETECH from './components/KODETECH';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import WhoIsFlo from './components/WhoIsFlo';
import Footer from './components/Footer';
import Playground from './components/Playground';
import ScrollToTop from './components/ScrollToTop';
function App() {
  // const { pathname } = useLocation();
  return (

    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LANDING />} />
          <Route path="/about" element={<WhoIsFlo />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/portfolio/kodetech" element={<KODETECH />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

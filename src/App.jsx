import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AISolutions from './pages/AISolutions';
// import Technologies from './pages/Technologies';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToTop from './components/ScrollToTop';
import SolutionDetailPage from './pages/SolutionDetailPage';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300 scrollbar-hide">
          <Navbar />
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/ai-solutions/:id" element={<SolutionDetailPage />} />
              {/* <Route path="/technologies" element={<Technologies />} /> */}
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/terms' element={<TermsAndConditions />} />
              <Route path='/privacy' element={<PrivacyPolicy />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
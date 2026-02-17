import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import AISolutions from './pages/AISolutions';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import SolutionDetailPage from './pages/SolutionDetailPage';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AdminLogin from './admin/AdminLogin';
import Dashboard from './admin/Dashboard';
import JobManagement from './admin/JobManagement';
import JobForm from './admin/JobForm';
import Applications from './admin/Applications';
import Analytics from './admin/Analytics';
import Settings from './admin/Settings';
import AdminRoute from './admin/AdminRoute';
import ApplicationForm from './pages/ApplicationForm';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AnimatePresence mode="wait">
            <Routes>
              {/* Main Layout Routes (with Navbar & Footer) */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route path="/ai-solutions" element={<AISolutions />} />
                <Route path="/ai-solutions/:id" element={<SolutionDetailPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/apply" element={<ApplicationForm />} />
                <Route path="/apply/:jobId" element={<ApplicationForm />} />
              </Route>
              

              {/* Admin Login (No Layout) */}
              <Route path="/admin/login" element={<AdminLogin />} />
              
              {/* Admin Layout Routes (with Sidebar & Topbar) */}
              <Route path="/admin" element={
                <AdminRoute>
                  <AdminLayout />
                </AdminRoute>
              }>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="jobs" element={<JobManagement />} />
                <Route path="jobs/new" element={<JobForm />} />
                <Route path="jobs/edit/:id" element={<JobForm />} />
                <Route path="applications" element={<Applications />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
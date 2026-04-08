  import { BrowserRouter, Routes, Route } from 'react-router-dom'
  import Layout from './components/common/Layout'
  import HomePage from './pages/HomePage'
  import ServicesPage from './pages/ServicesPage'
  import DoctorsPage from './pages/DoctorsPage'
  import AboutPage from './pages/AboutPage'
  import ContactPage from './pages/ContactPage'
  import BookingPage from './pages/BookingPage'
  import NotFoundPage from './pages/NotFoundPage'
  import TermsConditionsPage from './pages/TermsConditionsPage'
  import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
  import ServiceDetailPage from './pages/ServiceDetailPage'

  export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/terms and conditions" element={<TermsConditionsPage /> } />
            <Route path="/privacy" element={<PrivacyPolicyPage /> } />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

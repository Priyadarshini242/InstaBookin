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
import HireNursePage from './pages/HireNursePage'
import TrainingPage from './pages/TrainingPage'
import CourseDetailPage from './pages/CourseDetail'
import Nursingservice from './pages/Nursingservice'
import Nursebureaus from './pages/Nursebureaus'
import Nursingservices from './pages/Nursingservices'
import Caretakingathome from './pages/Caretakingathome'
import Childcare  from './pages/Childcare'
import Motherbabycare  from './pages/Motherbabycare'
import Seniorcitizencare  from './pages/Seniorcitizencare'
import Corporatehealth from './pages/Corporatehealth'
import Palliativecare from './pages/Palliativecare'
import Elderhomecare from './pages/Elderhomecare'
import Specialisedcare  from './pages/Specialisedcare'
import Orthopediccare from './pages/Orthopediccare'




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
          <Route path="/terms and conditions" element={<TermsConditionsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/hire-nurse" element={<HireNursePage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/training/:slug" element={<CourseDetailPage />} />
          <Route path="/nurse" element={<Nursingservice />} />
          <Route path="/bureaus" element={<Nursebureaus />} />
          <Route path="/nursing" element={<Nursingservices />} />
          <Route path="/caretaking" element={<Caretakingathome />} />
          <Route path="/childcare" element={<Childcare />} />
          <Route path="/motherbaby" element={<Motherbabycare />} />
          <Route path="/seniorcitizen" element={<Seniorcitizencare />} />
          <Route path="/corporate-health" element={<Corporatehealth />} />
          <Route path="/palliative-care" element={<Palliativecare />} />
          <Route path="/elder" element={<Elderhomecare />} />
          <Route path="/special" element={<Specialisedcare />} />
          <Route path="/ortho" element={<Orthopediccare />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

import Hero from '../components/home/Hero'
import StatsBar from '../components/home/StatsBar'
import ServicesSection from '../components/home/ServicesSection'
import HowItWorks from '../components/home/HowItWorks'
import DoctorsSection from '../components/home/DoctorsSection'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import CTABanner from '../components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <HowItWorks />
      <DoctorsSection />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  )
}

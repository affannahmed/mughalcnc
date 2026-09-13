import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Process />
        <WhyChooseUs />
        <Testimonial />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

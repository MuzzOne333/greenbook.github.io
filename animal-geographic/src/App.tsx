import Header from './components/Header'
import Hero from './components/hero'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  )
}
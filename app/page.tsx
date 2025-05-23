import Hero from '../components/Hero'
import Features from '../components/Features'
import Screenshots from '../components/Screenshots'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Screenshots />
    </main>
  )
}
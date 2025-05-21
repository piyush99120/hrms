import Hero from '../components/Hero'
import Features from '../components/Features'
import UserJourney from '../components/UserJourney'
import Benefits from '../components/Benefits'
import Screenshots from '../components/Screenshots'
import TechStack from '../components/TechStack'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      {/* <UserJourney /> */}
      {/* <Benefits /> */}
      <Screenshots />
      {/* <TechStack />
      <Testimonials /> */}
      {/* <CallToAction /> */}
    </main>
  )
}
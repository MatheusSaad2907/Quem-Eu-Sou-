import Hero from '../components/Hero.jsx'
import Objectives from '../components/Objectives.jsx'
import BooksSection from '../components/BooksSection.jsx'
import CharacterCarousel from '../components/CharacterCarousel.jsx'

function Home() {
  return (
    <div>
      <Hero />
      <Objectives />
      <BooksSection />
      <CharacterCarousel />
    </div>
  )
}

export default Home
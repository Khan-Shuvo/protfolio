import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
      <div className='min-h-screen bg-white dark:bg-gray-900 transition-colors'>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App

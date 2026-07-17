import { useState } from 'react'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import NavBar from './components/NavBar'

const portfolio = {
  name: 'RISHI SANJA',
  role: 'Computer Science Student',
  tagline: 'Building thoughtful digital experiences while learning by doing.',
  bio: 'I am a final-year student focused on frontend development, accessible design, and collaborative problem-solving. I enjoy turning class projects into polished products that feel clear, useful, and welcoming.',
  skills: [
    'React',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Git & GitHub',
    'Responsive Design',
    'UI Design',
  ],
  projects: [
    {
      title: 'DevFlow Forum',
      role: 'Lead Developer',
      description: 'A developer discussion platform with real-time markdown rendering, code-snippet compilation, and query filtering.',
      tech: ['React', 'CSS Modules', 'Firebase'],
      github: 'https://github.com/aaravmehta/devflow',
      demo: 'https://devflow.example.com',
    },
    {
      title: 'EduTrack Portal',
      role: 'Frontend Dev',
      description: 'A responsive dashboard displaying academic analytics, task deadlines, and calendar events for university students.',
      tech: ['React', 'Vanilla CSS', 'ChartJS'],
      github: 'https://github.com/aaravmehta/edutrack',
      demo: 'https://edutrack.example.com',
    },
    {
      title: 'HabitSync Engine',
      role: 'Solo Creator',
      description: 'An interactive offline habit-tracking dashboard styled with minimalist custom SVGs and localStorage persistence.',
      tech: ['HTML5', 'CSS Grid', 'JavaScript'],
      github: 'https://github.com/aaravmehta/habitsync',
      demo: 'https://habitsync.example.com',
    },
  ],
  email: 'sanjarishi99@gmail.com',
  location: 'Gujarat, India',
}

function App() {
  const [headerTheme, setHeaderTheme] = useState('#3b82f6')

  return (
    <div className="page-shell">
      <NavBar themeColor={headerTheme} onThemeChange={setHeaderTheme} />
      <Header
        name={portfolio.name}
        role={portfolio.role}
        tagline={portfolio.tagline}
        themeColor={headerTheme}
      />
      <main className="page-content">
        <About
          name={portfolio.name}
          bio={portfolio.bio}
          location={portfolio.location}
        />
        <Skills skillList={portfolio.skills} />
        <Projects projects={portfolio.projects} />
      </main>
      <Footer name={portfolio.name} email={portfolio.email} />
    </div>
  )
}

export default App

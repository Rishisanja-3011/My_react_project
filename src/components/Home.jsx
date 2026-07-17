import Header from './Header'
import About from './About'
import Skills from './Skills'

function Home({ portfolio, themeColor }) {
  return (
    <>
      <Header
        name={portfolio.name}
        role={portfolio.role}
        tagline={portfolio.tagline}
        themeColor={themeColor}
      />
      <main className="page-content">
        <About
          name={portfolio.name}
          bio={portfolio.bio}
          location={portfolio.location}
        />
        <Skills skillList={portfolio.skills} />
      </main>
    </>
  )
}

export default Home

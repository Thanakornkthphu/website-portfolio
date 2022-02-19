import './App.scss'

import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import About from './components/about/About.jsx'
import Skill from './components/skill/Skill.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx'


function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />

      <div className="sections">
        <About />
        <Skill />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

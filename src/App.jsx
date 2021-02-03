import TopNav from './components/TopNav';
import HeroView from './components/hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="app-container">
      <TopNav />
      <HeroView />
      <div className="scroll-reminder">
        <p>Scroll Down</p>
      </div>
      <AboutMe />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;

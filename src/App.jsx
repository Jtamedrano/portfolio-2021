import TopNav from './components/TopNav';
import HeroView from './components/hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="app-container">
      <div id="bg">
        <TopNav />
        <HeroView />
      </div>
      <AboutMe />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;

import TopNav from './components/TopNav';

function App() {
  return (
    <>
      <TopNav />
      <section class="hero">
        <div class="hero-text-container">
          <h1>Jesse Medrano</h1>
          <p>I'm a software developer from the Greater Los Angeles Area</p>
        </div>
        <button class="hero-cta-btn">View My Work</button>
      </section>
      <div class="scroll-reminder">
        <p>Scroll Up</p>
      </div>
      <section id="about-me">
        <h2>About Me</h2>
        <div class="subtitle">
          <p>2 Years of Active Software Development</p>
          <p>Full Stack Web Developer from Lambda School</p>
        </div>
        <div>
          <div class="languages">
            <p class="lang-item">HTML</p>
            <p class="lang-item">CSS</p>
            <p class="lang-item">SCSS</p>
            <p class="lang-item">JS</p>
            <p class="lang-item">TS</p>
          </div>
          <div class="technologies">
            <p class="tech-item">BootStrap</p>
            <p class="tech-item">TailwindCSS</p>
            <p class="tech-item">React</p>
            <p class="tech-item">ContextAPI</p>
            <p class="tech-item">Redux</p>
            <p class="tech-item">NodeJs</p>
            <p class="tech-item">Express</p>
            <p class="tech-item">Cors</p>
          </div>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
      </section>
      <section id="contactForm">
        <h2>Contact Me</h2>
      </section>
    </>
  );
}

export default App;

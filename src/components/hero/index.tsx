// import ParticlesBg from 'particles-bg';
import "./style.scss";

interface Props {}

const HeroView = (props: Props) => {
  return (
    <>
      <div className="container">
        <section className="hero">
          <div className="hero__content-container">
            <div className="hero-text-container">
              <h1>Jesse Medrano</h1>
              <p>
                I'm a{" "}
                <span className="color-primary fw-700">
                  Full Stack Web Developer
                </span>{" "}
                from the Greater Los Angeles Area
              </p>
            </div>
            <div className="hero-cta-btn">
              <button onClick={(e) => window.location.replace("/#projects")}>
                View My Work
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* <div>
        <ParticlesBg type="ball" bg={true} />
      </div> */}
    </>
  );
};

export default HeroView;

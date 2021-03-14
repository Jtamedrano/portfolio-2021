import TopNav from "./components/TopNav";
import HeroView from "./components/hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import { FC, useContext } from "react";
import { PageContext } from "./PageContextProvider";
import BlackOverlay from "./components/BlackOverlay";

const App: FC = (props) => {
  const context = useContext(PageContext);
  return (
    <>
      <div className="app-container">
        <div id="bg">
          <TopNav />
          <HeroView />
        </div>
        <AboutMe />
        <Projects />
        <ContactForm />
      </div>
      {!!context.modalState && <BlackOverlay />}
    </>
  );
};

export default App;

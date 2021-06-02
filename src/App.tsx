import TopNav from "./components/TopNav";
import HeroView from "./components/hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import { FC, useContext } from "react";
import { PageContext } from "./PageContextProvider";
import BlackOverlay from "./components/BlackOverlay";
import { Container, Box, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    backgroundColor: theme.palette.background.default,
  },
}));

const App: FC = (props) => {
  const classes = useStyles();
  const context = useContext(PageContext);
  return (
    <>
      <Box className={classes.main}>
        <Container>
          <div id="bg">
            <TopNav />
            <HeroView />
          </div>
          <AboutMe />
          <Projects />
          <ContactForm />
        </Container>
      </Box>
      {!!context.modalState && <BlackOverlay />}
    </>
  );
};

export default App;

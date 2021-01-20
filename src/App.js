import { Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';
import { Projects } from './components/Projects';
import TopNav from './components/TopNav';

function App() {
  return (
    <>
      <TopNav />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </>
  );
}

export default App;

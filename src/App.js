import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';
import { Projects } from './components/Projects';
import TopNav from './components/TopNav';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <TopNav />
              <div className="page-container">
                <Hero />
              </div>
            </>
          )}
        />
        <Route path="/projects">
          <>
            <TopNav />
            <div className="page-container">
              <Projects />
            </div>
          </>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

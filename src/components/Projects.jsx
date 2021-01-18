import React from 'react';
import {
  Redirect,
  Route,
  NavLink,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import ProjectItem from './ProjectItem';
import { projects } from '../data';
import '../styles/projects.scss';

export const Projects = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <h2>Projects</h2>

      <nav>
        <ul>
          {projects.map((item, i) => (
            <li key={`navItem-${i + 1}`}>
              <NavLink
                to={`${url}/${item.name.replaceAll(' ', '-').toLowerCase()}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <Switch>
          <Route path={`${path}/:projectName`}>
            <ProjectItem />
          </Route>
          <Route
            exact={true}
            path="/projects"
            render={(props) => <Redirect to="/projects/basic-todo-app" />}
          />
        </Switch>
      </div>
    </>
  );
};

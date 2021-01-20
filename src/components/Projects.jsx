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
import Menu from './Menu';
import { motion } from 'framer-motion';

export const Projects = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="page-container">
      <Menu />
      <motion.div
        className="container project-container"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', delay: 0.2, duration: 0.8 }}
      >
        <div className="project-topbar">
          <h2 className="page-main-header">Projects</h2>
          <ProjectNav url={url} />
        </div>
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
      </motion.div>
    </div>
  );
};

const ProjectNav = ({ url }) => (
  <nav className="topbar">
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
);

import { useEffect, useState } from 'react';
import styled from 'styled-components';
// hooks
import useDimensions from '../../utils/useDimensions';
// components
import NavBar from '../custom_comp_library/Nav/NavBar';
import Burger from '../custom_comp_library/Menu/Burger';
import CollapseMenu from '../custom_comp_library/Menu/CollapseMenu';
// imgs
import logo from '../../img/logo-01.svg';
// styles
import './style.scss';

interface Props {}

const NavLinkStyle = styled.div`
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: calc(5vh);
    right: -40px;
    width: 100vw;
    .nav-links {
      background: rgba(0, 150, 200, 1);

      li {
        padding: 0.75em;
      }

      a {
        color: white;
        text-decoration: none;
        font-size: 2em;
      }
    }
  }
`;

const NavList = () => (
  <ul className="nav-links">
    <li>
      <a href="#aboutMe">About Me</a>
    </li>
    <li>
      <a href="#projects">Projects</a>
    </li>
    <li>
      <a href="#contactMe">Contact Me</a>
    </li>
    <li>
      <a
        href="https://drive.google.com/file/d/16boSjhQdY8z9oIbTqHKeZAHt7E4lVsI0/view?usp=sharing"
        target="blank"
      >
        Resume
      </a>
    </li>
  </ul>
);

const TopNav = (props: Props) => {
  const [{ width }] = useDimensions();
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }
  return (
    <NavBar className={navbarClasses.join(' ')}>
      <div className="logo-wrapper">
        <img src={logo} className="logo" alt="initals JM" />
      </div>
      <div className="nav-links-wrapper" style={{ display: 'flex' }}>
        {width <= 768 ? (
          <>
            <Burger open={open} setOpen={setOpen} />
            {open && (
              <CollapseMenu>
                <NavLinkStyle>
                  <NavList />
                </NavLinkStyle>
              </CollapseMenu>
            )}
          </>
        ) : (
          <NavLinkStyle>
            <NavList />
          </NavLinkStyle>
        )}
      </div>
    </NavBar>
  );
};

export default TopNav;

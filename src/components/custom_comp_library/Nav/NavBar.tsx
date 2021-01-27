import styled from 'styled-components';

interface NavBarProps {
  children: JSX.Element | JSX.Element[] | undefined;
  className?: string;
}

const NavBarStyle = styled.nav`
  position: relative;
  width: 100%;
  height: 10vh;

  .container {
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavBar = ({
  children,
  className = 'navbar',
}: NavBarProps): JSX.Element => {
  return (
    <NavBarStyle className={className}>
      <div className="container">{children}</div>
    </NavBarStyle>
  );
};

export default NavBar;

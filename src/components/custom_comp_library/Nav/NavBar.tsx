interface NavBarProps {
  children: JSX.Element | JSX.Element[] | undefined;
  className?: string;
}

const NavBar = ({
  children,
  className = 'navbar',
}: NavBarProps): JSX.Element => {
  return (
    <nav className={className}>
      <div className="nav-container">{children}</div>
    </nav>
  );
};

export default NavBar;

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

// Nav background reads theme.navBg — which is the SAME purple in both
// light and dark theme objects (see theme.js), so it never changes.
const Nav = styled.nav`
  background-color: ${(props) => props.theme.navBg};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Brand = styled.span`
  color: ${(props) => props.theme.navText};
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

// react-router-dom's NavLink automatically adds an "active" class
// to whichever link matches the current URL. We use that to underline
// the current page.
const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.navText};
  font-weight: 500;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom: 2px solid ${(props) => props.theme.navText};
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Brand>Anuroopa Shankar</Brand>
      <NavLinks>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/experience">Experience</StyledNavLink>
        <StyledNavLink to="/projects">Projects</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
        <ThemeToggle />
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

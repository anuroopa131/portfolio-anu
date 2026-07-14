import styled from "styled-components";
import { useThemeContext } from "../theme/ThemeContext";

// A plain styled <button>. No new library here — just styled-components,
// and the sun/moon symbols are plain unicode characters, not an icon library.
const ToggleButton = styled.button`
  background: transparent;
  border: 2px solid ${(props) => props.theme.navText};
  color: ${(props) => props.theme.navText};
  font-size: 1.1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

const ThemeToggle = () => {
  // Pull isDark + toggleTheme from OUR context (built in ThemeContext.jsx)
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? "🔆" : "🌙"}
    </ToggleButton>
  );
};

export default ThemeToggle;

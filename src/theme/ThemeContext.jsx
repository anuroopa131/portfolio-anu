// ==========================================================================
// THIS IS "OUR" PROVIDER — the one built with React's Context API.
// Its only job: remember whether we're in dark mode, and give every
// component in the app a way to read that value and flip it.
//
// It does NOT apply any colors itself — it just holds the on/off switch.
// The actual color-applying is done by styled-components' ThemeProvider,
// which we wrap around this in App.jsx.
// ==========================================================================

import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

// 1. Create the Context "channel". Components will tune into this channel
//    to read isDark / toggleTheme without needing props passed down manually.
const ThemeContext = createContext();

// 2. This custom hook is just a shortcut so components can do:
//      const { isDark, toggleTheme } = useThemeContext();
//    instead of importing useContext + ThemeContext every time.
export const useThemeContext = () => useContext(ThemeContext);

// 3. The actual Provider component. We wrap <App /> in this once.
export const ThemeContextProvider = ({ children }) => {
  // Check localStorage first so the user's choice survives a page refresh.
  // If nothing saved yet, default to light mode.
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  // Whenever isDark changes, save the new choice to localStorage.
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  // Pick which theme OBJECT is active based on the boolean.
  const activeTheme = isDark ? darkTheme : lightTheme;

  return (
    // We provide isDark + toggleTheme to our own components (e.g. ThemeToggle
    // button needs toggleTheme; nothing else usually needs isDark directly).
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {/*
        Nested inside: styled-components' OWN ThemeProvider.
        This is what actually injects `activeTheme` into every
        styled-component's `theme` prop, app-wide.
      */}
      <StyledThemeProvider theme={activeTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

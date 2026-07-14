import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// ==========================================================================
// This is where everything you learned earlier gets wired together:
//
// ThemeContextProvider  -> decides light/dark + gives every child the
//                           correct theme object (this ALSO contains
//                           styled-components' ThemeProvider inside it,
//                           see ThemeContext.jsx)
// GlobalStyle            -> applies theme-aware body background/text once,
//                           site-wide
// BrowserRouter           -> turns on client-side routing (URL changes,
//                           no full page reloads)
// Routes / Route          -> the "map" of which page component shows for
//                           which URL path
// ==========================================================================

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;

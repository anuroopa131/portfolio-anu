// This file has ONLY plain JS objects — no React, no styled-components logic here.
// Each object is a lookup table of design values. Components will ask
// "what's my background right now?" and get the answer from whichever
// theme object is currently active.
//
// navBg and accent stay purple in both themes (as you wanted).
// background/text flip between the two.

export const lightTheme = {
  mode: "light",
  background: "#ffffff",
  text: "#111111",
  navBg: "#6a0dad",
  navText: "#ffffff",
  accent: "#a259ff",
  cardBg: "#f5f2fa",
  border: "#e0d6f0",
};

export const darkTheme = {
  mode: "dark",
  background: "#000000",
  text: "#f5f5f5",
  navBg: "#6a0dad",
  navText: "#ffffff",
  accent: "#c084fc",
  cardBg: "#161018",
  border: "#2a1f33",
};

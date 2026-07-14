import styled from "styled-components";
import Lottie from "lottie-react";
import avatarAnimation from "../assets/avatar-lottie.json";
// react-icons: FaLinkedin is Font Awesome's brand set, SiGmail is Simple
// Icons' brand set — both live inside the same react-icons package, just
// different sub-folders (fa vs si) depending on which set has the logo.
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// Every value below that references props.theme comes from theme.js,
// injected by styled-components' ThemeProvider (inside ThemeContext.jsx).
// That's why this page never needs an if/else for light vs dark —
// it just always asks "theme, what's my color right now?"

// Row layout: left column (avatar + name) sits beside the right column
// (summary + icons). @media is plain CSS media query syntax — styled-
// components lets you nest it directly inside the template string, same
// as you'd write in a normal .css file.
const Wrapper = styled.section`
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Left column: avatar stacked above the name
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

const AvatarBox = styled.div`
  width: 380px;
  height: 380px;
`;

const Name = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme.text};
  text-align: center;
`;

// Right column: summary text above the icon row
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  max-width: 480px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Summary = styled.p`
  line-height: 1.7;
  color: ${(props) => props.theme.text};
  opacity: 0.85;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const IconRow = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const IconLink = styled.a`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: ${(props) => props.theme.accent};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <LeftColumn>
        <AvatarBox>
          {/* lottie-react just needs the animation JSON data — loop keeps it playing */}
          <Lottie animationData={avatarAnimation} loop={true} />
        </AvatarBox>
        <Name>Anuroopa Shankar</Name>
      </LeftColumn>

      <RightColumn>
        <Summary>
          A driven Full-Stack Developer with a B.E. in Information Science and
          hands-on experience in .NET Core, Spring Boot, and React across
          multiple internships, backed by two research-published projects in AI
          and security. Eager to bring a strong technical foundation and a
          problem-solver's mindset to my next role.
        </Summary>

        <IconRow>
          <IconLink href="mailto:anuroopa131@gmail.com" aria-label="Email">
            <SiGmail size={20} />
          </IconLink>
         <IconLink
  href="https://www.linkedin.com/in/anuroopa-shankar/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedin size={22} />
</IconLink>
          <IconLink
            href="https://github.com/anuroopa131/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </IconLink>
        </IconRow>
      </RightColumn>
    </Wrapper>
  );
};

export default Home;
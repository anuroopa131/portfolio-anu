import styled from "styled-components";
// Same react-icons package, three sub-sets in use here:
// fa (Font Awesome) has GitHub and WhatsApp brand icons,
// si (Simple Icons) has the Gmail logo.
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Wrapper = styled.section`
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  padding: 3rem 1.5rem;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.text};
`;

const SubText = styled.p`
  color: ${(props) => props.theme.text};
  opacity: 0.8;
  max-width: 500px;
`;

const IconRow = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const IconLink = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${(props) => props.theme.accent};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <Title>Get In Touch</Title>
      <SubText>
        Feel free to reach out for opportunities, collaborations, or just to
        say hi.
      </SubText>
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
        <IconLink
          href="https://wa.me/918904973663"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={22} />
        </IconLink>
      </IconRow>
    </Wrapper>
  );
};

export default Contact;
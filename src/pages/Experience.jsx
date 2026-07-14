import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.text};
  margin-bottom: 2rem;
`;

// Each internship is a "card" — background/border both come from theme,
// so cards look right in both light and dark mode automatically.
const Card = styled.div`
  background: ${(props) => props.theme.cardBg};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Role = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: 1.1rem;
`;

const Company = styled.p`
  color: ${(props) => props.theme.accent};
  font-weight: 600;
  margin: 0.2rem 0 0.8rem;
`;

const Duration = styled.span`
  display: block;
  font-size: 0.85rem;
  color: ${(props) => props.theme.text};
  opacity: 0.6;
  margin-bottom: 0.8rem;
`;

const Bullets = styled.ul`
  padding-left: 1.2rem;
  color: ${(props) => props.theme.text};
  opacity: 0.85;
  line-height: 1.6;
`;

const experiences = [
  {
    company: "Sysfore Technologies",
    role: "Associate Software Engineer Trainee",
    duration: "May 2026 – Present",
    bullets: [
      "Undergoing structured training in ASP.NET Core and React.js, building full-stack modules with a focus on clean architecture and component-driven UI design.",
      "Developing proficiency in HTML5, CSS3, and responsive web design principles alongside API testing using Postman.",
    ],
  },
  {
    company: "E2E Rosh IT Solutions",
    role: "Software Engineer Intern",
    duration: "Jan 2026 – April 2026",
    bullets: [
      "Architected scalable backend modules for government-scale HRMS and Financial systems using multi-tier .NET architecture and RDLC report generation.",
      "Owned end-to-end development of 5 core modules for a Kitchen Compliance App, from wireframe to production-ready backend.",
      "Built full-stack Project and Ticket Management systems to master hierarchical RBAC architecture and secure API integration.",
    ],
  },
  {
    company: "Headrun Technologies",
    role: "Front-End Development Intern",
    duration: "May 2025 – July 2025",
    bullets: [
      "Built a context-aware chatbot with a RAG pipeline using FAISS Vector DB for semantic search and Ollama for local LLM inference.",
      "Engineered a responsive chat interface with real-time streaming responses, optimizing frontend state for large vector metadata.",
    ],
  },
];

const Experience = () => {
  return (
    <Wrapper>
      <Title>Internship Experience</Title>
      {experiences.map((exp) => (
        <Card key={exp.company}>
          <Role>{exp.role}</Role>
          <Company>{exp.company}</Company>
          <Duration>{exp.duration}</Duration>
          <Bullets>
            {exp.bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </Bullets>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Experience;

import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.text};
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: ${(props) => props.theme.cardBg};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 10px;
  padding: 1.5rem;
`;

const ProjectName = styled.h3`
  color: ${(props) => props.theme.text};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: ${(props) => props.theme.text};
  opacity: 0.85;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

// Small "pill" tags using the purple accent, tying visually back to the navbar
const Tag = styled.span`
  background: ${(props) => props.theme.accent};
  color: #ffffff;
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
`;

const projects = [
  {
    name: "DocuChat",
    description:
      "A specialized AI chatbot optimized for secure technical communication. Research published in IJCRT Journal, December 2024.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "LLM Integration"],
  },
  {
    name: "CredSafe",
    description:
      "A high-security credential manager built with end-to-end encryption. Research published in IJCRT Journal (ISSN: 2320-2882), December 2024.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    name: "Ticket Management System",
    description:
      "A support portal with hierarchical RBAC and Java SMTP integration for real-time status notifications.",
    tags: ["Java", "Spring Boot", "React.js", "MySQL", "Spring Data JPA"],
  },
  {
    name: "BunkMaster",
    description:
      "A student analytics dashboard with custom React hooks and Recharts for interactive attendance visualization.",
    tags: ["React.js", "Node.js", "Recharts", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <Grid>
        {projects.map((project) => (
          <Card key={project.name}>
            <ProjectName>{project.name}</ProjectName>
            <Description>{project.description}</Description>
            <TagRow>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagRow>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Projects;

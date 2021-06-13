import React from "react";
import { Section, SectionTitle } from "./../../styles/GlobalComponents/index";
import { SectionBody, ProjectContainer } from "./ProjectsStyles";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { data } from "./../../data/ProjectData";

const Projects = () => {
  return (
    <Section>
      <SectionTitle data-text="PROJECTS">Projects</SectionTitle>
      <SectionBody>
        {data.map((project, i) => (
          <ProjectContainer key={i}>
            <div className="project-content">
              <div>
                <h3 className="project-title">
                  <a href={project.external} target="_blank">
                    {project.title}
                  </a>
                </h3>

                <div
                  className="project-description"
                  dangerouslySetInnerHTML={{
                    __html: project.description,
                  }}
                />

                {true && (
                  <ul className="project-tech-list">
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                )}

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      aria-label="GitHub Link"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      aria-label="External Link"
                      className="external"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-image">
              <a href={project.external} target="_blank">
                <img src={project.image} className="img" />
              </a>
            </div>
          </ProjectContainer>
        ))}
      </SectionBody>
    </Section>
  );
};

export default Projects;

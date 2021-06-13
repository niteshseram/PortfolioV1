import React from "react";
import { Section, SectionTitle } from "./../../styles/GlobalComponents/index";
import { SectionBody, ProjectContainer } from "./ProjectsStyles";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <Section>
      <SectionTitle data-text="PROJECTS">Projects</SectionTitle>
      <SectionBody>
        <ProjectContainer>
          <div className="project-content">
            <div>
              <h3 className="project-title">
                <a href={"#"}>Booksify</a>
              </h3>

              <div
                className="project-description"
                dangerouslySetInnerHTML={{
                  __html:
                    "Booksify is a online book store where you can buy your favorite books. It is built using MERN stack and Redux with paypal payment gateway",
                }}
              />

              {true && (
                <ul className="project-tech-list">
                  <li>Java</li>
                  <li>Java</li>
                  <li>Java</li>
                  <li>Java</li>
                </ul>
              )}

              <div className="project-links">
                {true && (
                  <a href={"#"} aria-label="GitHub Link">
                    <FaGithub />
                  </a>
                )}
                {true && (
                  <a href={"#"} aria-label="External Link" className="external">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="project-image">
            <a href={"#"}>
              <img src="../../images/projects/booksify.JPG" className="img" />
            </a>
          </div>
        </ProjectContainer>
        <ProjectContainer>
          <div className="project-content">
            <div>
              <h3 className="project-title">
                <a href={"#"}>Booksify</a>
              </h3>

              <div
                className="project-description"
                dangerouslySetInnerHTML={{
                  __html:
                    "Booksify is a online book store where you can buy your favorite books. It is built using MERN stack and Redux with paypal payment gateway",
                }}
              />

              {true && (
                <ul className="project-tech-list">
                  <li>Java</li>
                  <li>Java</li>
                  <li>Java</li>
                  <li>Java</li>
                </ul>
              )}

              <div className="project-links">
                {true && (
                  <a href={"#"} aria-label="GitHub Link">
                    {/* <Icon name="GitHub" /> */}
                    Github
                  </a>
                )}
                {true && (
                  <a href={"#"} aria-label="External Link" className="external">
                    {/* <Icon name="External" /> */}
                    External
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="project-image">
            <a href={"#"}>
              <img src="../../images/projects/booksify.JPG" className="img" />
            </a>
          </div>
        </ProjectContainer>
      </SectionBody>
    </Section>
  );
};

export default Projects;

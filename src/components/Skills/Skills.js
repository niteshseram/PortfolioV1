import React from "react";
import { Section, SectionTitle } from "./../../styles/GlobalComponents/index";
import { SectionBody, SkillContainer } from "./SkillsStyles";
import SkillLabel from "./../SkillLabel/SkillLabel";

const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle data-text="SKILLS">Skills</SectionTitle>
      <SectionBody>
        <p>
          Below list are some of the technologies that I am familiar with. I
          might not be expertise with all the technologies listed below but I
          might get the work done.
        </p>
        <SkillContainer>
          <SkillLabel url="/logos/java.png" name="Java" />
          <SkillLabel url="/logos/js.png" name="Javascript" />
          <SkillLabel url="/logos/python.png" name="Python" />
          <SkillLabel url="/logos/react.png" name="React" />
          <SkillLabel url="/logos/node.png" name="Node" />
          <SkillLabel url="/logos/spring.png" name="Spring" />
          <SkillLabel url="/logos/mongo.png" name="MongoDB" />
          <SkillLabel url="/logos/sql.png" name="MySQL" />
          <SkillLabel url="/logos/docker.png" name="Docker" />
          <SkillLabel url="/logos/k8s.png" name="Kubernetes" />
          <SkillLabel url="/logos/ts.png" name="TypeScript" />
          <SkillLabel url="/logos/aws.png" name="AWS" />
          <SkillLabel url="/logos/ci.png" name="CI/CD" />
        </SkillContainer>
      </SectionBody>
    </Section>
  );
};

export default Skills;

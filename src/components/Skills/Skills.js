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
          <SkillLabel url="../../images/logos/java.png" name="Java" />
          <SkillLabel url="../../images/logos/js.png" name="Javascript" />
          <SkillLabel url="../../images/logos/python.png" name="Python" />
          <SkillLabel url="../../images/logos/react.png" name="React" />
          <SkillLabel url="../../images/logos/node.png" name="Node" />
          <SkillLabel url="../../images/logos/spring.png" name="Spring" />
          <SkillLabel url="../../images/logos/mongo.png" name="MongoDB" />
          <SkillLabel url="../../images/logos/sql.png" name="MySQL" />
          <SkillLabel url="../../images/logos/docker.png" name="Docker" />
          <SkillLabel url="../../images/logos/k8s.png" name="Kubernetes" />
          <SkillLabel url="../../images/logos/ts.png" name="TypeScript" />
          <SkillLabel url="../../images/logos/aws.png" name="AWS" />
          <SkillLabel url="../../images/logos/ci.png" name="CI/CD" />
        </SkillContainer>
      </SectionBody>
    </Section>
  );
};

export default Skills;

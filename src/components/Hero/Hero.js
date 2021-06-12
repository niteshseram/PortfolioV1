import React from "react";
import {
  Section,
  LeftSection,
  HeroText,
  HeroName,
  HeroProfession,
} from "./HeroStyles";
import { Button } from "./../../styles/GlobalComponents/Button";

const Hero = () => {
  return (
    <Section>
      <LeftSection>
        <HeroText>Hey there, I am</HeroText>
        <HeroName>Nitesh Seram</HeroName>
        <HeroProfession>Software Developer</HeroProfession>
        <Button>Get Resume</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;

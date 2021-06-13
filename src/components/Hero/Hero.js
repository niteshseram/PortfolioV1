import React from "react";
import {
  Section,
  LeftSection,
  ProfileImgContainer,
  HeroText,
  HeroName,
  HeroProfession,
} from "./HeroStyles";
import { Button } from "./../../styles/GlobalComponents/Button";
import { ImgLink } from "./../../styles/GlobalComponents/index";

const Hero = () => {
  return (
    <Section>
      <ProfileImgContainer>
        <ImgLink src="../../images/dp.png" />
      </ProfileImgContainer>
      <LeftSection>
        <HeroText>Hey there, I am</HeroText>
        <HeroName>Nitesh Seram</HeroName>
        <HeroProfession>Software Developer</HeroProfession>
        <Button href="../../resume.pdf" target="_blank">
          Get Resume
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;

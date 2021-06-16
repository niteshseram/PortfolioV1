import React from "react";
import Image from "next/image";
import {
  Section,
  LeftSection,
  ProfileImgContainer,
  HeroText,
  HeroName,
  HeroProfession,
} from "./HeroStyles";
import { Button } from "./../../styles/GlobalComponents/Button";
import * as gtag from "../../lib/gtag";

const Hero = () => {
  const getResumeEvent = () => {
    gtag.event({
      action: "get_resume",
      category: "Portfolio",
      label: "Get Resume",
      value: "",
    });
  };

  return (
    <Section>
      <ProfileImgContainer>
        <Image src="/dp.png" width={200} height={200} />
      </ProfileImgContainer>
      <LeftSection>
        <HeroText>Hey there, I am</HeroText>
        <HeroName>Nitesh Seram</HeroName>
        <HeroProfession>Software Developer</HeroProfession>
        <Button
          href="../../resume.pdf"
          target="_blank"
          onClick={() => getResumeEvent()}
        >
          Get Resume
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;

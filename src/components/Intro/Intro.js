import React from "react";
import {
  Section,
  SectionTitle,
  ImgLink,
} from "./../../styles/GlobalComponents/index";
import { SectionBody, LeftSection, RightSection } from "./IntroStyles";

const Intro = () => {
  return (
    <Section>
      <SectionTitle>About</SectionTitle>
      <SectionBody>
        <LeftSection>
          <p>
            Hello!, My name is Seram Nitesh Singh. I am a software developer and
            also open source enthusiast. I have graduated in Computer Science
            Engineering from Assam Don Bosco University in the year 2020.
          </p>

          <p>
            I am deeply passionate about software development. My interest lies
            mainly in web development and continuously exploring various field
            as well. I love learning and exploring new technologies and also
            always looking for opportunities to grow my skill set and myself as
            well.
          </p>

          <p>
            Fast forward to today, my main focus these days is to learn
            technologies related to building a robust and production ready
            application.
          </p>
        </LeftSection>
        <RightSection>
          <ImgLink src="../../images/dp.png" />
        </RightSection>
      </SectionBody>
    </Section>
  );
};

export default Intro;

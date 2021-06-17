import React from "react";
import Image from "next/image";
import {
  Section,
  SectionTitle,
  TextColor,
} from "./../../styles/GlobalComponents/index";
import { SectionBody, LeftSection, RightSection } from "./IntroStyles";

const Intro = () => {
  return (
    <Section id="about">
      <SectionTitle data-text="ABOUT">About</SectionTitle>
      <SectionBody>
        <LeftSection>
          <p>
            Hello! My name is <TextColor>Seram Nitesh Singh</TextColor>. I am a
            software developer and also <TextColor>Open Source</TextColor>{" "}
            enthusiast. I have graduated in Computer Science Engineering from
            Assam Don Bosco University in the year 2020.
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
          <Image
            src="/images/dp.png"
            width={400}
            height={400}
            alt="Profile Picture"
          />
        </RightSection>
      </SectionBody>
    </Section>
  );
};

export default Intro;

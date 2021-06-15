import React from "react";
import { SectionTitle } from "./../../styles/GlobalComponents/index";
import { Section } from "./ContactStyles";
import { Button } from "./../../styles/GlobalComponents/Button";
import * as gtag from "../../lib/gtag";

const Contact = () => {
  const contactEvent = () => {
    gtag.event({
      action: "contact_me",
      category: "Portfolio",
      label: "Contact Me",
      value: "",
    });
  };

  return (
    <Section id="contact">
      <SectionTitle data-text="CONTACT">Contact</SectionTitle>
      <h2>Want to connect?</h2>
      <p>Reach out to me. My inbox is always open!</p>

      <Button
        href="mailto:niteshseram@gmail.com"
        target="_blank"
        onClick={() => contactEvent()}
      >
        Get In Touch
      </Button>
    </Section>
  );
};

export default Contact;

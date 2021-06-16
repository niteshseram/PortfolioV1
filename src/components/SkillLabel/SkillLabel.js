import React from "react";
import Image from "next/image";
import { SkillLabelContainer } from "./SkillLabelStyles";

const SkillLabel = ({ url, name }) => {
  return (
    <SkillLabelContainer>
      {/* <img src={url} alt={name} /> */}
      <Image src={url} alt={name} width={45} height={45} />
      <p>{name}</p>
    </SkillLabelContainer>
  );
};

export default SkillLabel;

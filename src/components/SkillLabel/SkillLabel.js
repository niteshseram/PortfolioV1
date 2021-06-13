import React from "react";
import { SkillLabelContainer } from "./SkillLabelStyles";

const SkillLabel = ({ url, name }) => {
  return (
    <SkillLabelContainer>
      <img src={url} alt={name} />
      <p>{name}</p>
    </SkillLabelContainer>
  );
};

export default SkillLabel;

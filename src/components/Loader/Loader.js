import React from "react";
import { LogoSvg } from "../LogoSvg";
import { LoaderContainer, LoadingCircle } from "./LoaderStyles";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingCircle />
      <LogoSvg />
    </LoaderContainer>
  );
};

export default Loader;

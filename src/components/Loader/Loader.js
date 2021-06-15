import React from "react";
import { LoaderContainer, LoadingCircle, LoaderSvg } from "./LoaderStyles";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingCircle />
      <LoaderSvg src="/logo.svg" />
    </LoaderContainer>
  );
};

export default Loader;

import React from "react";
import { LoaderContainer, LoaderImg, LoadingCircle } from "./LoaderStyles";
import { LoaderSvg } from "./LoaderSvg";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingCircle />
      <LoaderSvg />
    </LoaderContainer>
  );
};

export default Loader;

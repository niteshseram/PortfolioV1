import React from "react";
import { LoaderContainer, LoaderImg, LoadingCircle } from "./LoaderStyles";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingCircle />
      <LoaderImg src="../../images/logo.png" />
    </LoaderContainer>
  );
};

export default Loader;

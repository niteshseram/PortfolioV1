import React from "react";
import Image from "next/image";
import { LoaderContainer, LoadingCircle } from "./LoaderStyles";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingCircle />
      <Image src="/images/logo.svg" width={70} height={70} />
    </LoaderContainer>
  );
};

export default Loader;

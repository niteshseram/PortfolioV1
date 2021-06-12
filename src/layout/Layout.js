import React from "react";
import { Container, MainContainer } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <MainContainer>{children}</MainContainer>
    </Container>
  );
};

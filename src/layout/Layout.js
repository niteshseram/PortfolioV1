import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Container, MainContainer } from "./LayoutStyles";
import Header from "./../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toggle } from "../styles/GlobalComponents";

export const Layout = ({ children, darkMode }) => {
  return (
    <Container>
      <Toggle onClick={darkMode.toggle} className="container-toggle">
        {darkMode.value ? <FaSun /> : <FaMoon />}
      </Toggle>
      <Header darkMode={darkMode} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Container>
  );
};

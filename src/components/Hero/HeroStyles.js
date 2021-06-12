import styled from "styled-components";

export const Section = styled.section`
  min-height: 90vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const LeftSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const HeroText = styled.h6`
  font-size: 3rem;
  font-family: ${(props) => props.theme.fonts.fira};
`;
export const HeroName = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 12rem;
  margin-top: 0px;
  margin-bottom: 5px;
`;

export const HeroProfession = styled.h3`
  font-size: 6rem;
  margin-bottom: 5rem;
`;

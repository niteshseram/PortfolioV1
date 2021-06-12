import styled from "styled-components";

export const Section = styled.section`
  min-height: 90vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    justify-content: center;
  }
`;

export const LeftSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
  }
`;

export const HeroText = styled.h6`
  font-size: 3rem;
  font-family: ${(props) => props.theme.fonts.fira};
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.4rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 1.6rem;
  }
`;
export const HeroName = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 12rem;
  margin-top: 0px;
  margin-bottom: 5px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 8rem;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 4.5rem;
    margin-bottom: 20px;
  }
`;

export const HeroProfession = styled.h3`
  font-size: 6rem;
  margin-bottom: 5rem;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 4rem;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 2.6rem;
  }
`;

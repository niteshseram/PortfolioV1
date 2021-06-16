import styled from "styled-components";

export const Section = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    justify-content: space-evenly;
  }
`;

//ImgSection
export const ProfileImgContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  display: none;

  div {
    border-radius: 50%;
    box-shadow: 5px 5px 16px ${(props) => props.theme.colors.buttonShadow1},
      -5px -5px 16px ${(props) => props.theme.colors.buttonShadow2};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;

// Left Section
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
    font-size: 5rem;
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

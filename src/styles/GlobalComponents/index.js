import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled.h1`
  font-size: 6rem;
  position: relative;
  &:after {
    content: "ABOUT";
    position: absolute;
    font-size: 10rem;
    left: 50%;
    top: -25%;
    transform: translateX(-50%);
    color: transparent;
    z-index: -1;
    opacity: 0.6;
    font-weight: 800;
    text-shadow: 1px 1px 3px ${(props) => props.theme.colors.buttonShadow2},
      -1px -1px 3px ${(props) => props.theme.colors.buttonShadow1};
  }
`;

export const ImgLink = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 100%;
  box-shadow: 20px 20px 16px ${(props) => props.theme.colors.buttonShadow1},
    -20px -20px 16px ${(props) => props.theme.colors.buttonShadow2};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 300px;
    height: 300px;
    box-shadow: 5px 5px 16px ${(props) => props.theme.colors.buttonShadow1},
      -5px -5px 16px ${(props) => props.theme.colors.buttonShadow2};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 200px;
    height: 200px;
  }
`;

export const TextColor = styled.span`
  color: ${(props) => props.theme.colors.text};
`;

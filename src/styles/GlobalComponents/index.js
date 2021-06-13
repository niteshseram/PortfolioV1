import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.paraText};
    margin-bottom: 20px;
    line-height: 2.8rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    p {
      font-size: 1.6rem;
      line-height: 2.2rem;
      margin-bottom: 15px;
    }
  }
`;

export const SectionTitle = styled.h1`
  font-size: 6rem;
  position: relative;
  &:after {
    content: attr(data-text);
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

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3.5rem;

    &:after {
      font-size: 5rem;
    }
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

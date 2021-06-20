import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 2rem;
    color: ${(props) => props.theme.text.secondary};
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
  margin-bottom: 10rem;

  &:after {
    content: attr(data-text);
    position: absolute;
    font-size: 10rem;
    left: 50%;
    top: -25%;
    transform: translateX(-50%);
    color: transparent;
    z-index: -1;
    opacity: 0.5;
    font-weight: 700;
    text-shadow: 1px 1px 3px ${(props) => props.theme.buttonShadow2},
      -1px -1px 3px ${(props) => props.theme.buttonShadow1};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3.5rem;
    margin-bottom: 5rem;
    &:after {
      font-size: 5rem;
      color: ${(props) => props.theme.buttonShadow2};
      text-shadow: none;
    }
  }
`;

export const TextHighlight = styled.span`
  color: ${(props) => props.theme.text.primary};
  font-weight: 500;
`;

export const Toggle = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: ${(props) => props.theme.text.tertiary};
  }
`;

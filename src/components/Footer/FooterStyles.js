import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 0px 50px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 20px;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    padding: 0 10px;
  }
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.footer};
  p {
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.fonts.fira};

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 1.4rem;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10%;
  font-family: ${(props) => props.theme.fonts.fira};
  svg {
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.colors.text};
    transition: all 0.3 ease-out;
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
      transition: all 0.3 ease-in;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 40%;
  }
`;

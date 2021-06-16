import styled from "styled-components";

export const SkillLabelContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 10px;
  border-radius: 5px;
  /* img {
    width: 45px;
    height: 45px;
    margin: 0px 10px !important;
  } */
  p {
    margin: 0;
    padding-left: 10px;
  }

  box-shadow: 3px 3px 10px ${(props) => props.theme.colors.buttonShadow1},
    -3px -3px 10px ${(props) => props.theme.colors.buttonShadow2};

  @media ${(props) => props.theme.breakpoints.sm} {
    box-shadow: none;
    padding: 10px 5px;
    img {
      height: 35px !important;
      width: 35px !important;
    }
  }
`;

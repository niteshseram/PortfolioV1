import styled from "styled-components";

export const SkillLabelContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  padding: 10px 10px;
  border-radius: 5px;
  p {
    color: ${(props) => props.theme.text.tertiary};
    margin: 0;
    padding-left: 10px;
  }

  box-shadow: 3px 3px 10px ${(props) => props.theme.buttonShadow1},
    -3px -3px 10px ${(props) => props.theme.buttonShadow2};

  @media ${(props) => props.theme.breakpoints.sm} {
    box-shadow: none;
    padding: 10px 5px;
    img {
      height: 35px !important;
      width: 35px !important;
    }
  }
`;

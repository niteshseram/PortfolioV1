import styled from "styled-components";

export const SkillLabelContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.buttonColor};
  padding: 10px 0px;
  border-radius: 5px;
  img {
    width: 45px;
    height: 45px;
    margin: 0px 10px;
  }
  p {
    margin: 0;
  }

  box-shadow: 3px 3px 10px ${(props) => props.theme.colors.buttonShadow1},
    -3px -3px 10px ${(props) => props.theme.colors.buttonShadow2};

  @media ${(props) => props.theme.breakpoints.sm} {
    img {
      width: 25px;
      height: 25px;
      margin: 0px 5px;
    }
    box-shadow: none;
  }
`;

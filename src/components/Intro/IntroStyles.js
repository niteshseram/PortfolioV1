import styled from "styled-components";

export const SectionBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;
export const LeftSection = styled.div`
  max-width: 600px;
  margin-right: 20px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-right: 0px;
  }
`;
export const RightSection = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }

  div {
    width: 400px !important;
    height: 400px !important;
    border-radius: 50%;
    box-shadow: 10px 10px 16px ${(props) => props.theme.colors.buttonShadow1},
      -10px -10px 16px ${(props) => props.theme.colors.buttonShadow2};
    @media ${(props) => props.theme.breakpoints.md} {
      width: 300px !important;
      height: 300px !important;
      box-shadow: 5px 5px 16px ${(props) => props.theme.colors.buttonShadow1},
        -5px -5px 16px ${(props) => props.theme.colors.buttonShadow2};
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      width: 200px !important;
      height: 200px !important;
    }
  }
`;

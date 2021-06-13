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
`;

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
  p {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.paraText};
    margin-bottom: 20px;
    line-height: 2.8rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    p {
      font-size: 1.8rem;
      line-height: 2.2rem;
      margin-bottom: 15px;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-right: 0px;
  }
`;
export const RightSection = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

import styled from "styled-components";

export const SectionBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const LeftSection = styled.div`
  text-align: justify;
  max-width: 600px;
  margin-right: 20px;
  p {
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.paraText};
  }
`;
export const RightSection = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

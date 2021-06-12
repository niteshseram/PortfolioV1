import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 50px;
  width: 100%;
  margin: auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 20px;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    padding: 0 10px;
  }
`;
export const MainContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

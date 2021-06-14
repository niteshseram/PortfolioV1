import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 5rem;
    margin-top: 100px;
    margin-bottom: 0px;

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 2.5rem;
    }
  }

  p {
    margin-bottom: 30px;
  }
`;

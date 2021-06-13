import styled from "styled-components";

export const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

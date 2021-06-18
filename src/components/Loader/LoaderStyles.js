import styled, { keyframes } from "styled-components";

const fadeAndScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    padding: 30px !important;
    animation: ${fadeAndScale} 1s linear;
  }
`;

const rot = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const LoadingCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-right: 0.3rem solid ${(props) => props.theme.secondary};
  animation: ${rot} 2s linear infinite;
  position: absolute;
`;

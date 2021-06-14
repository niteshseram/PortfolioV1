import styled, { keyframes } from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  border-right: 0.3rem solid ${(props) => props.theme.colors.secondary};
  animation: ${rot} 2s linear infinite;
  position: relative;
`;

export const LoaderImg = styled.img`
  width: 150px;
  height: 150px;
  padding: 30px;
  border-radius: 50%;
  position: absolute;
`;

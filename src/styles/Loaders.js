import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes` 
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

export const CircleSpinner = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  animation: ${spinAnimation} 1.2s linear infinite;
`;

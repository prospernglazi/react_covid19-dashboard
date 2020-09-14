import styled from 'styled-components';
import { FlexContainer } from './Container';

export const Card = styled(FlexContainer)`
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) =>
    theme === 'dark' ? '#252a41' : '#f0f2fa'};
  border-radius: var(--border-radius);
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#1e202a')};
  cursor: pointer;
  transition: filter 0.2s ease, color 0.5s ease, background 0.5s ease;

  &:hover {
    filter: ${({ theme }) =>
      theme === 'dark' ? 'brightness(1.3)' : 'brightness(0.9)'};
  }
`;

export const Title = styled(FlexContainer)`
  justify-content: space-around;
  color: ${({ theme }) => (theme === 'dark' ? '#8b97c6' : '#63687e')};
  background-color: #e0e0e0;
`;

// const borderStyles = brandColor.includes('linear')
//   ? { borderImage: `linear-gradient(to right, #fdc468, #df4996) 50` }
//   : { borderTopColor: ` ${brandColor}` };

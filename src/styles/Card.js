import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: ${({ type }) => (type === 'overview' ? '200px' : '120px')};
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

export const Top = styled.div`
  display: flex;
  justify-content: space-around;
  justify-self: start;
  color: ${({ theme }) => (theme === 'dark' ? '#8b97c6' : '#63687e')};
  transition: color 0.5s ease;
  background-color: #e0e0e0;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
// const borderStyles = brandColor.includes('linear')
//   ? { borderImage: `linear-gradient(to right, #fdc468, #df4996) 50` }
//   : { borderTopColor: ` ${brandColor}` };

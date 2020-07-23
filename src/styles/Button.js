import styled from 'styled-components';

export const Button = styled.input.attrs((props) => ({
  type: 'submit',
  value: 'Search'
}))`
  align-self: stretch;
  background-color: transparent;
  border: 2px solid ${({ theme }) => (theme === 'dark' ? '#fff' : '#1e202a')};
  border-radius: var(--border-radius) var(--border-radius) var(--border-radius)
    0;
  cursor: pointer;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#1e202a')};
  padding: 5px 10px;
  font-weight: bold;
  transition: border 0.2s ease;

  &:hover,
  &:focus {
    border: 2px solid var(--blue);
  }
`;

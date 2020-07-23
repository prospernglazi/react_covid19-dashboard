import styled from 'styled-components';

export const SearchInput = styled.input.attrs((props) => ({
  type: 'search',
  id: 'country-picker',
  name: 'country-picker',
  ariaLabel: 'Search results by country',
}))`
  border: none;
  background-color: var(--card-bg);
  border-bottom: 2px solid
    ${({ theme }) => (theme === 'dark' ? '#fff' : '#1e202a')};
  width: 100%;
  font-size: 2rem;
  padding: 5px;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#1e202a')};
  letter-spacing: 0.1rem;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: var(--blue);
  }
`;

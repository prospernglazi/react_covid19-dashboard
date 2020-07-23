import styled from 'styled-components';

export const Toggle = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 50px;
  height: 26px;
  background: linear-gradient(#378fe6, #3eda82);
  margin-left: 10px;
  padding: 0 3px;
  border-radius: 20px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #1e202a;
    border-radius: 50%;
    transform: ${({ theme }) =>
      theme === 'dark' ? 'translateX(0)' : 'translateX(113%)'};
    transition: transform 0.2s ease;
  }

  &:hover::after {
    filter: brightness(2);
  }
`;

export const Checkbox = styled.input.attrs((props) => ({
  type: 'checkbox',
  id: 'toggle',
}))`
  display: none;
`;

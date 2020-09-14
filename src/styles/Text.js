import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  letter-spacing: ${(props) => props.space};
  text-transform: ${(props) => props.case};
  text-align: ${(props) => props.align || 'center'};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  color: ${(props) => props.color};
  border-bottom: ${(props) => props.bb};
`;

export const MutedText = styled(Text)`
  color: ${({ theme }) => (theme === 'dark' ? '#8b97c6' : '#63687e')};
`;

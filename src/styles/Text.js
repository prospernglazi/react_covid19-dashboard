import styled from 'styled-components';

export const Text = styled.p`
  display: inline;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  letter-spacing: ${(props) => props.space};
  text-transform: ${(props) => props.case};
  grid-column: ${(props) => props.gc};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  color: ${(props) => props.color};
`;

export const MutedText = styled(Text)`
  color: ${({ theme }) => (theme === 'dark' ? '#8b97c6' : '#63687e')};
  transition: all 0.5s ease;
`;

export const IndicatorText = styled(Text)`
  color: ${({ diff }) =>
    diff === 'increase'
      ? '#1db489 '
      : diff === 'decrease'
      ? '#dc414c'
      : '#03a9f4'};
`;

import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  flex-direction: ${(props) => props.d};
  justify-content: ${(props) => props.justify};
  flex: ${(props) => props.fx};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.m};
  margin-bottom: ${(props) => props.mb};
  font-size: ${(props) => props.fz};
`;

export const GridContainer = styled.div`
  display: grid;
`;

export const AppContainer = styled(FlexContainer)`
  min-height: 100vh;
  padding: 2% 10%;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#1e202a')};
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(#1f212e 50%, #1e202a 50%)'
      : 'linear-gradient(#f5f7ff 50%, #fff 50%)'};
  transition: color 0.5s ease;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 50px;
`;

export const CardGrid = styled(GridContainer)`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin: 5px 0 20px 0;
`;

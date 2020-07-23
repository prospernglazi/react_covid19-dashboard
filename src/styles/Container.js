import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.d};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export const GridContainer = styled.div`
  display: grid;
`;

export const AppContainer = styled(FlexContainer)`
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 2% 10%;
  letter-spacing: 0.5px;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#1e202a')};
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(#1f212e 50%, #1e202a 50%)'
      : 'linear-gradient(#f5f7ff 50%, #fff 50%)'};
  transition: color 0.5s ease;
`;

export const HeaderContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

export const LastUpdateContainer = styled(FlexContainer)`
  height: calc(var(--overview-card-height) * 0.5);
  align-items: center;
`;

export const ToggleContainer = styled(FlexContainer)`
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 50px;
`;

export const MainContainer = styled(FlexContainer)`
  position: relative;
  width: 100%;
  flex-direction: column;
`;

export const CardGrid = styled(GridContainer)`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 5px 0 20px 0;
`;

export const FooterContainer = styled(FlexContainer)`
  justify-content: center;
  width: 100%;
  background-color: var(--card-bg);
  padding: 5px 0;
  font-size: 0.7rem;
  color: #ffffff80;
  font-weight: lighter;
`;

export const NavContainer = styled(FlexContainer)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-right: auto;
  padding: 5px 0;
`;

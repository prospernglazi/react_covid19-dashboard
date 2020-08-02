import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import { MainContainer } from '../../styles/Container';
import OverviewPage from '../OverviewPage';
import ListTablePage from '../ListTablePage';
import DensityPage from '../DensityPage';

export default function Main(props) {
  return (
    <MainContainer>
      <Route
        exact
        path='/'
        render={(routeProps) => <OverviewPage {...routeProps} {...props} />}
      />
      <Route
        path='/list'
        render={(routeProps) => <ListTablePage {...routeProps} {...props}/>}
      />
      <Route
        path='/density'
        render={(routeProps) => <DensityPage {...routeProps} />}
      />
    </MainContainer>
  );
}

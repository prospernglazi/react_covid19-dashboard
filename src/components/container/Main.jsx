import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import { MainContainer } from '../../styles/Container';
import OverviewPage from '../OverviewPage';
import ListTablePage from '../ListTablePage';
import DensityPage from '../DensityPage';

export default function Main({ confirmed, deaths, recovered, country }) {
  return (
    <MainContainer>
      <Route
        exact
        path='/'
        render={(routeProps) => (
          <OverviewPage
            {...routeProps}
            confirmed={confirmed.value}
            recovered={recovered.value}
            deaths={deaths.value}
            country={country}
          />
        )}
      />
      <Route
        path='/list'
        render={(routeProps) => (
          <ListTablePage
            {...routeProps}
            confirmed={confirmed.value}
            recovered={recovered.value}
            deaths={deaths.value}
            country={country}
          />
        )}
      />
      <Route
        path='/density'
        render={(routeProps) => <DensityPage {...routeProps} />}
      />
    </MainContainer>
  );
}

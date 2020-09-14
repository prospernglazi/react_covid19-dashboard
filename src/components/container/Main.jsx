import React from 'react';
import { Route } from 'react-router-dom';

import { FlexContainer } from '../../styles/Container';
import OverviewPage from '../pages/OverviewPage';
import ListTablePage from '../pages/ListTablePage';
import HealthTipsPage from '../pages/HealthTipsPage';

export default function Main(props) {
  return (
    <FlexContainer d='column'>
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
        path='/info'
        render={(routeProps) => <HealthTipsPage {...routeProps} {...props}/>}
      />
    </FlexContainer>
  );
}

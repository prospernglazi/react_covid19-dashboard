import React from 'react';

import { HeaderContainer, FlexContainer } from '../../styles/Container';

import CountryPicker from '../CountryPicker';
import Navigation from '../Navigation';
import ThemeToggler from '../ThemeToggler';
import LastUpdate from '../LastUpdate';

export default function Header({
  lastUpdate,
  toggleTheme,
  onCountrySubmit,
  countries,
}) {
  return (
    <HeaderContainer d='column' justify='flex-end'>
      <FlexContainer align='flex-end'>
        <LastUpdate lastUpdate={lastUpdate} />
        <CountryPicker
          onCountrySubmit={onCountrySubmit}
          countries={countries}
        />
        <ThemeToggler toggleTheme={toggleTheme} />
      </FlexContainer>
      <Navigation />
    </HeaderContainer>
  );
}

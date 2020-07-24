import React from 'react';

import { HeaderContainer, FlexContainer } from '../../styles/Container';

import CountryPicker from '../CountryPicker';
import Navigation from '../Navigation';
import ThemeToggler from '../ThemeToggler';
import LastUpdate from '../LastUpdate';

export default function Header({
  updated,
  toggleTheme,
  onCountrySubmit,
  countries,
}) {
  return (
    <HeaderContainer d='column' justify='flex-end'>
      <FlexContainer align='flex-end'>
        <LastUpdate updated={updated} />
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

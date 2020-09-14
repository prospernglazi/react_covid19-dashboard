import React from 'react';

import { FlexContainer } from '../../styles/Container';

import CountryPicker from '../CountryPicker';
import Navigation from '../Navigation';
import ThemeToggler from '../ThemeToggler';
import LastUpdate from '../LogoAndDate';

export default function Header({
  updated,
  toggleTheme,
  onCountrySubmit,
  countries,
}) {
  return (
    <FlexContainer d='column' mb='40px'>
      <FlexContainer justify='space-between' align='center' mb='20px'>
        <LastUpdate updated={updated} />
        <ThemeToggler toggleTheme={toggleTheme} />
      </FlexContainer>
      <FlexContainer align='flex-end' fz='1.5rem'>
        <FlexContainer fx='1'>
          <CountryPicker
            onCountrySubmit={onCountrySubmit}
            countries={countries}
          />
        </FlexContainer>
        <FlexContainer fx='1' justify='space-between'>
          <Navigation />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}

import React, { useContext } from 'react';
import { ThemeContext } from '../App';

import { ToggleContainer } from '../styles/Container';
import { MutedText } from '../styles/Text';
import { Checkbox, Toggle } from '../styles/Toggle';

export default function ThemeToggler({toggleTheme}) {
  const darkTheme = useContext(ThemeContext);
  return (
    <ToggleContainer>
      <MutedText weight='bold'>{darkTheme ? 'Dark' : 'Light'} Mode</MutedText>
      <Checkbox id='toggle' onChange={toggleTheme} defaultChecked={darkTheme} />
      <Toggle theme={darkTheme ? 'dark' : 'light'} htmlFor='toggle' />
    </ToggleContainer>
  );
}

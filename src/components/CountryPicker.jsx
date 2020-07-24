import React, { useContext, useState } from 'react';
import { ThemeContext } from '../App';

import { Form } from '../styles/Container';
import { Button } from '../styles/Button';
import { SearchInput } from '../styles/SearchInput';

export default function CountryPicker({ onCountrySubmit, countries }) {
  const darkTheme = useContext(ThemeContext);
  const [country, setCountry] = useState('');
  const onCountrySubmitEvent = (e) => {
    e.preventDefault();
    onCountrySubmit(country);
    setCountry('');
  };

  return (
    <Form onSubmit={onCountrySubmitEvent}>
      <SearchInput
        list='countries'
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        theme={darkTheme ? 'dark' : 'light'}
      />
      <datalist id='countries'>
        <option value='Global' />
        {countries.map(({ country }) => (
          <option key={country} value={country} />
        ))}
      </datalist>
      <Button theme={darkTheme ? 'dark' : 'light'} />
    </Form>
  );
}

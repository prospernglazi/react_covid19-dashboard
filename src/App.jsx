import React, { createContext, useState } from 'react';

import { Header, Navigation, Main, Footer } from './components/barrel';

import { AppContainer } from './styles/Container';
import { CircleSpinner } from './styles/Loaders';

import useFetch from './services/useFetch';

export const ThemeContext = createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');

  const {
    data: countries,
    error: countriesError,
    loading: countriesLoading,
  } = useFetch('countries');

  const {
    data: countryData,
    error: countryError,
    loading: countryLoading,
  } = useFetch(`countries/${selectedCountry}`);

  const { data, error, loading } = useFetch(`all`);

  const toggleTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };

  const handleSubmit = (country) => {
    if (!country.trim() || country === 'World') setSelectedCountry('');
    if (countries.findIndex((c) => c.country === country) === -1) return;
    setSelectedCountry(country.trim());
  };

  return !data || !countries ? (
    <CircleSpinner />
  ) : (
    <ThemeContext.Provider value={darkTheme}>
      <AppContainer d='column' theme={darkTheme ? 'dark' : 'light'}>
        <Header
          toggleTheme={toggleTheme}
          updated={data.updated}
          onCountrySubmit={handleSubmit}
          countries={countries}
        />
        <Main
          worldData={data}
          countryData={countryData}
          loading={loading}
          country={selectedCountry}
          countries={countries}
        />
        <Footer />
      </AppContainer>
    </ThemeContext.Provider>
  );
}

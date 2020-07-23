import React, { createContext, useState, useEffect } from 'react';

import { Header, Main, Footer } from './components/barrel';

import { AppContainer } from './styles/Container';
import { CircleSpinner } from './styles/Loaders';
import { fetchData, fetchCountries } from './api/userApi';

export const ThemeContext = createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [data, setData] = useState();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countries, setCountries] = useState('');

  useEffect(() => {
    (async function getData() {
      try {
        const data = await fetchData(selectedCountry);
        const countriesData = await fetchCountries();
        setData(data);
        setCountries(countriesData.countries);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [selectedCountry]);

  const toggleTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };

  const handleSubmit = (country) => {
    if (!country.trim() || country === 'Global') setSelectedCountry('');
    if (countries.findIndex((c) => c.name === country) === -1) return;
    setSelectedCountry(country.trim());
  };

  return !data || !countries ? (
    <CircleSpinner />
  ) : (
    <ThemeContext.Provider value={darkTheme}>
      <AppContainer theme={darkTheme ? 'dark' : 'light'}>
        <Header
          toggleTheme={toggleTheme}
          lastUpdate={data.lastUpdate}
          onCountrySubmit={handleSubmit}
          countries={countries}
        />
        <Main {...data} country={selectedCountry} />
        <Footer />
      </AppContainer>
    </ThemeContext.Provider>
  );
}

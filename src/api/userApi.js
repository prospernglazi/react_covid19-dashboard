import { handleError, handleResponse } from './handlers';
const baseUrl = 'https://corona.lmao.ninja/v2';

export async function fetchData(country) {
  try {
    const {
      updated,
      cases,
      todayCases,
      recovered,
      todayRecovered,
      deaths,
      todayDeaths,
      active,
      critical,
      tests,
    } = country
      ? await fetch(`${baseUrl}/countries/${country}`)
          .then(handleResponse)
          .catch(handleError)
      : await fetch(`${baseUrl}/all`).then(handleResponse).catch(handleError);
    return {
      updated,
      cases,
      todayCases,
      recovered,
      todayRecovered,
      deaths,
      todayDeaths,
      active,
      critical,
      tests,
    };
  } catch (error) {
    console.log(error);
  }
}

export const fetchContinents = async () => {
  try {
    const response = await fetch(`${baseUrl}/continents`)
      .then(handleResponse)
      .catch(handleError);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${baseUrl}/countries`)
      .then(handleResponse)
      .catch(handleError);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchHistoricalData = async (country) => {
  try {
    if (country) {
      const {
        timeline: { cases, recovered, deaths }
      } = await fetch(`${baseUrl}/historical/${country}?lastdays=30`)
        .then(handleResponse)
        .catch(handleError);
      return { cases, recovered, deaths };
    } else {
      const { cases, recovered, deaths } = await fetch(
        `${baseUrl}/historical/all`,
      )
        .then(handleResponse)
        .catch(handleError);
      return { cases, recovered, deaths };
    }
  } catch (error) {
    console.log(error);
  }
};

import { handleError, handleResponse } from './handlers';
const baseUrl = 'https://covid.mathdro.id/api';

export async function fetchData(country) {
  try {
    const { confirmed, recovered, deaths, lastUpdate } = country
      ? await fetch(`${baseUrl}/countries/${country}`)
          .then(handleResponse)
          .catch(handleError)
      : await fetch(`${baseUrl}`).then(handleResponse).catch(handleError);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
}

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

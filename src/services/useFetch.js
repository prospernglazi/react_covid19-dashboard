import { useEffect, useState } from 'react';
const baseUrl = 'https://corona.lmao.ninja/v2';

export default function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function getData() {
      try {
        const response = await fetch(`${baseUrl}/${url}`);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return { data, error, loading };
}

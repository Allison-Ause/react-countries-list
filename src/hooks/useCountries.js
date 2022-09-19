import { fetchCountries } from '../services/countries';
import { useState, useEffect } from 'react';

export default function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountries();
      setCountries(data);
    }
    fetchData();
  }, []);
  return countries;
}

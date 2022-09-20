import { fetchCountries } from '../services/countries';
import { useState, useEffect } from 'react';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountries();
      return setCountries(data);
    }
    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 2000);
  }, []); //fetch to supabase is not affected here for continent. This is for changes to query to database.

  const filterCountries = () => {
    if (continent === 'All') return countries;
    return countries.filter((country) => country.continent === continent);
  };

  return { loading, filterCountries, continent, setContinent };
}

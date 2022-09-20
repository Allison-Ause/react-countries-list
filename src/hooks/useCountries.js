import { fetchCountries } from '../services/countries';
import { useState, useEffect } from 'react';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountries();
        return setCountries(data);
      } catch {
        return setError('Tragically, something has gone amiss!');
      }
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

  return { loading, filterCountries, continent, setContinent, error };
}

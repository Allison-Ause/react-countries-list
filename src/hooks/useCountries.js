import { fetchCountries } from '../services/countries';
import { useState, useEffect } from 'react';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('None');

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
    const continentArray = countries.filter((country) => {
      if (continent === 'All') return true;
      return country.continent === continent;
    });

    const filteredArray = continentArray.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === 'Alphabetical') {
      filteredArray.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (sort === 'Reverse Alphabetical') {
      filteredArray.sort((a, b) => {
        if (b.name < a.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
        return 0;
      });
    }
    return filteredArray;
  };

  return {
    loading,
    filterCountries,
    continent,
    setContinent,
    error,
    search,
    setSearch,
    sort,
    setSort,
  };
}

// let countries = [...countries];

// console.log('LOWERCASEDARRAY', lowerCasedArray);
// const search = { search };
// console.log('SEARCH', search);
// const lowerSearch = search.toLowerCase;
// console.log('lowerSearch', lowerSearch);
// return lowerCasedArray.filter((country) => country.name.includes(lowerSearch));

// original filterCountries:
// const filterCountries = () => {
//     const continentArray = countries.filter((country) => {
//       if (continent === 'All') return true;
//       return country.continent === continent;
//     });

//     return continentArray.filter((country) =>
//       country.name.toLowerCase().includes(search.toLowerCase())
//     );
//   };

//   return { loading, filterCountries, continent, setContinent, error, search, setSearch, sort, setSort };
// }

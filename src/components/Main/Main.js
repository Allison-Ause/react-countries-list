import useCountries from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';

import { Spinner } from '@chakra-ui/react';

export default function Main() {
  const {
    loading,
    filterCountries,
    continent,
    setContinent,
    error,
    search,
    setSearch,
    sort,
    setSort,
  } = useCountries();

  if (loading) return <Spinner margin="auto" emptyColor="gray.200" color="blue.500" size="xl" />;

  return (
    <main>
      <p className="error">{error}</p>
      <h2>Behold: The Flags of the World!</h2>
      <Search search={search} setSearch={setSearch} />
      <Filter continent={continent} setContinent={setContinent} sort={sort} setSort={setSort} />
      <div>
        {filterCountries().map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}

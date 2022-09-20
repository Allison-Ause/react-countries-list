import useCountries from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';
import Filter from '../Filter/Filter';

import { Spinner } from '@chakra-ui/react';

export default function Main() {
  const { loading, filterCountries, continent, setContinent, error } = useCountries();

  if (loading) return <Spinner margin="auto" emptyColor="gray.200" color="blue.500" size="xl" />;

  return (
    <main>
      <p className="error">{error}</p>
      <h2>Behold: The Flags of the World!</h2>
      <Filter continent={continent} setContinent={setContinent} />
      <div>
        {filterCountries().map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}

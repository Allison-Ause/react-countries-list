import useCountries from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';

export default function Main() {
  const countries = useCountries();
  return (
    <main>
      <h2>Behold: The Flags of the World!</h2>
      <div>
        {countries.map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}

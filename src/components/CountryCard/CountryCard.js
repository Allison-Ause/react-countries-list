export default function CountryCard({ name, iso2 }) {
  return (
    <div>
      <h3>{name}</h3>
      <img
        src={`https://flagcdn.com/108x81/${iso2.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/216x162/${iso2.toLowerCase()}.png 2x`}
        width="108"
        height="81"
        alt={`${name}`}
      />
    </div>
  );
}

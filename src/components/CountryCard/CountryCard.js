import '../CountryCard/CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <h3 className="country-name">{name}</h3>
      <img
        className="image"
        src={`https://flagcdn.com/108x81/${iso2.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/216x162/${iso2.toLowerCase()}.png 2x`}
        width="108"
        height="81"
        alt={`${name}`}
      />
    </div>
  );
}

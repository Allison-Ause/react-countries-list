export default function Filter({ continent, setContinent }) {
  return (
    <select
      className="filter"
      value={continent}
      onChange={(e) => {
        setContinent(e.target.value);
        console.log('setContinent Value', e.target.value);
      }}
    >
      <option value="All">All</option>
      <option value="Oceania">Oceania</option>
      <option value="Europe">Europe</option>
      <option value="Africa">Africa</option>
      <option value="North America">North America</option>
      <option value="Antarctica">Antarctica</option>
      <option value="South America">South America</option>
      <option value="Asia">Asia</option>
    </select>
  );
}

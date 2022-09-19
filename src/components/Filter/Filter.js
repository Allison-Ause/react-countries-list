export default function Filter({ continent, setContinent }) {
  return (
    <select
      className="filter"
      value={continent}
      onChange={(e) => {
        setContinent(e.target.value);
      }}
    >
      <option value="all">All</option>
      <option value="oceania">Oceania</option>
      <option value="europe">Europe</option>
      <option value="africa">Africa</option>
      <option value="northAmerica">North America</option>
      <option value="antarctica">Antarctica</option>
      <option value="southAmerica">South America</option>
      <option value="asia">Asia</option>
    </select>
  );
}

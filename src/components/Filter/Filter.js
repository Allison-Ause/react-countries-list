export default function Filter({ continent, setContinent, sort, setSort }) {
  return (
    <div>
      <select className="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
        Sort:
        <option value="None">All</option>
        <option value="Alphabetical">Alphabetical</option>
        <option value="Reverse Alphabetical">Reserve Alphabetical</option>
      </select>
      <select
        className="filter"
        value={continent}
        onChange={(e) => {
          setContinent(e.target.value);
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
    </div>
  );
}

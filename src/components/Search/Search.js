import '../Search/Search.css';

export default function Search({ search, setSearch }) {
  return (
    <div>
      <h3 className="title">Search:</h3>
      <input
        className="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

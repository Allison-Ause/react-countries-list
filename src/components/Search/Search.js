export default function Search({ search, setSearch }) {
  return (
    <div>
      <h3>Search:</h3>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

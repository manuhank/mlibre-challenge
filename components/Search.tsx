
function Search({ onSearch }) {
  return (
    <form onSubmit={onSearch} className="search">
      <input type="text" className="search" name="searchQuery" placeholder="Nunca dejes de buscar"></input>
      <button className="search">
        <img className="search" src="/Assets/ic_Search@2x.png" alt="search"></img>
      </button>
    </form>
  );
}

export default Search;
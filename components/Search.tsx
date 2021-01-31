import {useRouter} from "next/router";

function Search() {
  const router = useRouter();

  const navigateSearchPage=(event)=>{
    event.preventDefault();
    router.push(`/items?search=${event.target["searchQuery"].value}`);
  }

  return (
    <form onSubmit={navigateSearchPage} className="search">
      <input type="text"  className="search" name="searchQuery" placeholder="Nunca dejes de buscar"></input>
      <button className="search">
        <img className="search" src="/Assets/ic_Search@2x.png" alt="search"></img>
      </button>
    </form>
  );
}

export default Search;
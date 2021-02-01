import Search from './Search';
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();

  const navigateSearchPage = (event) => {
    event.preventDefault();
    router.push(`/items?search=${event.target["searchQuery"].value}`);
  }

  return (
    <nav>
      <img className="logo" src="/Assets/Logo_ML@2x.png" alt="mercadolibre"></img>
      <Search onSearch={navigateSearchPage} />
    </nav>
  );
}

export default NavBar;
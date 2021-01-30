import Search from './Search';
function NavBar() {
  return (
    <nav>
      <img className="logo" src="/Assets/Logo_ML@2x.png" alt="mercadolibre"></img>
      <Search/>
    </nav>
  );
}

export default NavBar;
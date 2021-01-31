import { searchEndpoint } from "../api/items";

function SearchPage({ searchResults }) {
  return <p>
    {JSON.stringify(searchResults)}
  </p>
}
export const getServerSideProps = async ({ query }) => {
  const { items: searchResults } = await searchEndpoint(query.search);

  return {
    props: {
      searchResults,
    },
  };
};
export default SearchPage

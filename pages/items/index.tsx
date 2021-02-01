import ItemResult from '../../components/ItemResult'
import { itemInResult } from '../../types/items'
import { searchEndpoint } from '../api/items'

function SearchPage({ searchResults }) {
  return (
    <main className="SearchPage">
      <section className="results">
        <ol>
          {searchResults.map((item: itemInResult) => (
            <li className="result">
              <ItemResult item={item} key={item.id} />
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}
export const getServerSideProps = async ({ query }) => {
  const {
    items: searchResults,
  }: { items: itemInResult[] } = await searchEndpoint(query.search)

  return {
    props: {
      searchResults,
    },
  }
}
export default SearchPage

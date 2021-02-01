import ItemResult from '../../components/ItemResult'
import { itemInResult } from '../../types/items'
import { searchEndpoint } from '../api/items'
import { useRouter } from 'next/router'
import CategoriesBreadcrum from '../../components/CategoriesBreadcrum'

function SearchPage({ searchResults, categories }) {
  const router = useRouter()

  const navigateItemPage = (id: string) => router.push(`/items/${id}`)

  return (
    <main className="SearchPage">
      <CategoriesBreadcrum categories={categories} />
      <section className="results">
        <ol>
          {searchResults.map((item: itemInResult) => (
            <li className="result">
              <ItemResult
                item={item}
                key={item.id}
                onClick={() => navigateItemPage(item.id)}
              />
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
    categories,
  }: { items: itemInResult[]; categories: string[] } = await searchEndpoint(
    query.search
  )

  return {
    props: {
      searchResults,
      categories
    },
  }
}
export default SearchPage

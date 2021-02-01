import { itemDetails } from '../../types/items'
import { formatCurrency } from '../../utils/formatCurrency'
import { getItemEndpoint } from '../api/items/[id]'

function ItemDescriptionPage({ item }: { item: itemDetails }) {
  const price = formatCurrency(item.price.amount, item.price.currency, 2)
  return (
    <>
      <main className="item-details">
        <div></div>
        <section className="item-details">
          <article>
            <img className="product" src={item.picture}></img>
            <h1>Descripción del producto</h1>
            <p className="descripcion">{item.description}</p>
          </article>
          <aside>
            <p className="info"></p>
            <h1 className="name">{item.title}</h1>
            <h2 className="price">
              {price.slice(0, -3)}
              <sup className="cents">{price.slice(-2)}</sup>
            </h2>
            <button className="buy">Comprar</button>
          </aside>
        </section>
      </main>
    </>
  )
}
export const getServerSideProps = async ({ query }) => {
  const { item }: { item: itemDetails } = await getItemEndpoint(query.id)

  return {
    props: {
      item,
    },
  }
}
export default ItemDescriptionPage

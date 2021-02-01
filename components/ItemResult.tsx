import { itemInResult } from '../types/items'
import { formatCurrency } from '../utils/formatCurrency'

function ItemResult({
  item,
  onClick = () => {},
}: {
  item: itemInResult
  onClick?: any
}) {
  return (
    <div className="result" key={item.id} onClick={onClick}>
      <img className="thumbnail" src={item.picture}></img>
      <div className="main-info">
        <span className="price">
          {formatCurrency(item.price.amount, item.price.currency)}
          {item.free_shipping ? (
            <img
              className="freeShipping"
              src="/Assets/ic_shipping@2x.png"
            ></img>
          ) : null}
        </span>
        <p className="title">{item.title}</p>
      </div>
      <p className="location">{item.location}</p>
    </div>
  )
}

export default ItemResult

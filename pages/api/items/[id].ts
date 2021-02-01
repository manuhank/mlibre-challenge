import { getItem, getItemDescription } from '../../../services/mercadolibre'
import { itemDetails } from '../../../types/items'
export default async (req, res) => {
  try {
    const { query } = req
    const response = await getItemEndpoint(query.id)
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export async function getItemEndpoint(id: string) {
  const [{ data: searchResult }, { data: description }] = await Promise.all([
    getItem(id),
    getItemDescription(id),
  ])

  const response: itemDetails = {
    item: {
      id: searchResult.id,
      title: searchResult.title,
      price: {
        currency: searchResult.currency_id,
        amount: searchResult.price,
      },
      picture: searchResult.thumbnail,
      condition: searchResult.condition,
      sold_quantity: searchResult.sold_quantity,
      description: description.plain_text,
    },
  }
  return response
}

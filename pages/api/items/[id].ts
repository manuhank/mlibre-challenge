import { getCategory, getItem, getItemDescription } from '../../../services/mercadolibre'
import { itemDetailsResponse } from '../../../types/items'
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
  const [{ data: item }, { data: description }] = await Promise.all([
    getItem(id),
    getItemDescription(id),
  ])
  const {data:category} = await getCategory(item.category_id);

  const response: itemDetailsResponse = {
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
      },
      picture: item.pictures[0].secure_url,
      condition: item.condition,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
      categories:category.path_from_root.map(category => category.name),
    },
  }
  return response
}

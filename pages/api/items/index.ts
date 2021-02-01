import { getCategory, search } from '../../../services/mercadolibre'
import { searchResult } from '../../../types/items'

export default async (req, res) => {
  try {
    const { query } = req
    const results = await searchEndpoint(query.q)
    res.status(200).json(results)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export async function searchEndpoint(query) {
  const { data } = await search(query, 4)
  const getCategories = data.results.map((item) =>
    getCategory(item.category_id)
  )
  let categoriesResponses: any = await Promise.all(getCategories)
  categoriesResponses = categoriesResponses.map(
    (category) => category.data.path_from_root
  )

  const results: searchResult = {
    categories: commonCategories(categoriesResponses),
    items: data.results.map(
      ({
        id,
        title,
        currency_id: currency,
        price: amount,
        thumbnail: picture,
        condition,
        shipping,
        seller_address,
      }) => ({
        id,
        title,
        price: {
          currency,
          amount,
        },
        picture,
        condition,
        free_shipping: shipping.free_shipping,
        location: seller_address.state.name,
      })
    ),
  }
  return results
}

function commonCategories(categoriesResponses){
    let categories = []
    for (let i in categoriesResponses[0]) {
      const categoryName = categoriesResponses[0][i].name
      if (
        categoriesResponses
          .slice(1)
          .some((categoryArray) => categoryArray[i].name !== categoryName)
      )
        break
      categories.push(categoryName)
    }
    return categories;
}
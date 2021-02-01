import { search } from '../../../services/mercadolibre'
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
    const { data } = await search(query)
    const results: searchResult = {
        items: data.results
            .map(
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
            )
            .slice(0, 4),
    }
    return results
}

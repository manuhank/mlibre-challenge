import axios from 'axios'

export const search = (query: string, limit?: number) =>
  axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=${
      limit ? query + '&limit=' + limit : query
    }`
  )

export const getItem = (id: string) =>
  axios.get(`https://api.mercadolibre.com/items/${id}`)

export const getItemDescription = (id: string) =>
  axios.get(`https://api.mercadolibre.com/items/${id}/description`)

export const getCategory = (id: string) =>
  axios.get(`https://api.mercadolibre.com/categories/${id}`)

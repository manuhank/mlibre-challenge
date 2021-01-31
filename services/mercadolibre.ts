import axios from "axios";

export const search = (query: string) => axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
export const getItem = (id: string) => axios.get(`https://api.mercadolibre.com/items/${id}`);
export const getItemDescription = (id: string) => axios.get(`https://api.mercadolibre.com/items/${id}/description`)
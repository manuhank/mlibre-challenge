export interface itemDetails {
  id: string
  title: string
  price: {
    currency: string
    amount: number
  }
  picture: string
  condition: string
  // free_shipping: boolean;
  sold_quantity: number
  description: string
  categories:string[]
}
export interface itemDetailsResponse {
  // author: {
  //     name: string;
  //     lastname: string;
  // };
  item: itemDetails
}

export interface itemInResult {
  id: string
  title: string
  price: {
    currency: string
    amount: number
    // decimals: number
  }
  picture: string
  condition: string
  free_shipping: boolean
  location: string
  categories:string[]
}

export interface searchResult {
  categories: string[];
  items: itemInResult[]
}

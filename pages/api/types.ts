export interface itemDetails {
    author: {
        name: String;
        lastname: String;
    };
    item: {
        id: String;
        title: String;
        price: {
            currency: String;
            amount: Number;
            decimals: Number;
        };
        picture: String;
        condition: String;
        free_shipping: Boolean;
        sold_quantity: Number;
        description: String;
    }
}

export interface itemInResult {
    id: String;
    title: String;
    price: {
        currency: String;
        amount: Number;
        decimals: Number
    };
    picture: String;
    condition: String;
    free_shipping: Boolean
}

export interface searchResult {
    categories: String[];
    items: itemInResult[];
} 
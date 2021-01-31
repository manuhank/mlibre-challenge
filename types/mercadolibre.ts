export interface itemDetails {
    // author: {
    //     name: string;
    //     lastname: string;
    // };
    item: {
        id: string;
        title: string;
        price: {
            currency: string;
            amount: number;
            // decimals: number;
        };
        picture: string;
        condition: string;
        // free_shipping: Boolean;
        sold_quantity: number;
        description: string;
    }
}

export interface itemInResult {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
        // decimals: number
    };
    picture: string;
    condition: string;
    free_shipping: Boolean;
}

export interface searchResult {
    // categories: string[];
    items: itemInResult[];
} 
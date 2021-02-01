export const formatCurrency = (price:number = 0, currency:string ='ARS', locale:string = 'es-AR') =>
    price.toLocaleString(locale, { style: 'currency', currency })

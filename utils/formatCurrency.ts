export const formatCurrency = (
  price: number = 0,
  currency: string = 'ARS',
  decimals: number = 0,
  locale: string = 'es-AR'
) =>
  price.toLocaleString(locale, {
    style: 'currency',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    currency,
  })

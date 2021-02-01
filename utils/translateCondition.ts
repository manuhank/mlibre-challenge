const translations = {
  español: {
    new: 'Nuevo',
    used: 'Usado',
    refurbished: 'Refurbished',
  },
}
export const translateCondition = (condition, language = 'español') =>
  translations[language][condition]

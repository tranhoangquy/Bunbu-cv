import en from '../en/index'
const translations = en
const getTranslatedText = (key, locale = 'en') => {
  const currTranslation = translations[key] ? translations[key] : en
  let translatedText = currTranslation[key]
    ? currTranslation[key]
    : en
    ? en[key]
    : key
  return translatedText
}
export { getTranslatedText }

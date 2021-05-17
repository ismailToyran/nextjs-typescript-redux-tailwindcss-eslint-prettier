const LanguageQuery = (locale: string | undefined) => `{
  languageCollection(locale: "${locale}") {
    items {
      title
      lang
      about
      projects
      contact
      contactDescription
      titleFirst
      titleSecond
      copyright
      formSuccess
      formError
      formTryAgain
      namePlaceholder
      nameRequired
      emailPlaceholder
      emailRequired
      emailNotValid
      messagePlaceholder
      messageRequired
      formSubmit
      recaptchaError
    }
  }
}`;

export default LanguageQuery;

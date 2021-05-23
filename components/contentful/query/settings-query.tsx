const SettingsQuery = (locale: string | undefined) => `{
  settingsCollection(locale: "${locale}") {
    items {
      title
      logoLight {
        title
        url
        width
        height
      }
      logoDark {
        title
        url
        width
        height
      }
      navigation
      resume {
        title
        url
      }
      socials {
        github
        linkedin
        instagram
        facebook
      }
      email
      meta {
        title
        description
        image {
          title
          url
          width
          height
        }
      }
      author
    }
  }
}`;

export default SettingsQuery;

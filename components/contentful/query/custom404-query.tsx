const Custom404Query = (locale: string | undefined) => `{
  custom404Collection(locale: "${locale}") {
    items {
      meta {
        title
        description
        image {
          title
          url
          width
          height
        }
        author
      }
      title
      button
    }
  }
}`;

export default Custom404Query;

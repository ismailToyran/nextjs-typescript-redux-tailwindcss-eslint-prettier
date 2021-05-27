const HomepageQuery = (locale: string | undefined) => `{
  homepageCollection(locale: "${locale}") {
    items {
      title
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
      heroKeywords
      about {
        json
      }
      authorImage {
        title
        url
        width
        height
      }
      projectListCollection(limit: 5) {
        items {
          title
          description
          techs
          image {
            title
            url
            width
            height
          }
          link
        }
      }
    }
  }
}`;

export default HomepageQuery;

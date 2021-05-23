const AssetsQuery = () => `{
  assetCollection {
    items {
      sys{
        id
      }
      title
      url
      width
      height
    }
  }
}`;

export default AssetsQuery;

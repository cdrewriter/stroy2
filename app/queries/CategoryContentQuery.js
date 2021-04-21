let CategoryContentQuery;
CategoryContentQuery = (cats) =>
    `
query ($cats: String) {
  allUslugis(where: {postCategories_some: {url: $cats}}){
      id
      url
      name
      description
      content
      image {
        publicUrl
      }
      content
      postCategories {
        id
        title
        url
      }

      description
      content
    }
}
`;

export default CategoryContentQuery;
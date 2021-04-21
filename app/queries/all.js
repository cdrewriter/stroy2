export const MainQuery = /* GraphQL */ `
    query {
        Main(where: { id: "5f7ef4dbd3ec864484349860" }) {
        title
        subtext
    }
    }
`;

export const AboutQuery = /* GraphQL */ `
   query {
      About(where: { id: "5f80cb377a316844809ecec2" }) {
        title
        title__text
        description
        photos {
          images {
            image {
              publicUrlTransformed(
                transformation: { transformation: "webp", fetch_format: "webp" }
              )
            }
          }
        }
        image {
          publicUrl
        }
      }
   }
`;

// export const SmallBuildQuery = `
//         query {
//             SmallBuild(where: { id: "5f81b62e6e425c535ca01916" }) {
//             id
//             title
//             title__text
//             description
//             image {
//                 publicUrl
//             }
//             }
//         }
// `;
// export const allBuildObjectsQuery = `
//         query {
//             allBuildObjects(first: 5) {
//         id
//         title
//         description
//         image {
//             publicUrl
//         }
//         }
//         }
//
// `;
export const UslugiPageQuery = `
     query {
          UslugiPage(where: { id: "5f98c36d370fea1fd0490feb" }) {
            id
            title
            url
            description
          }
     }
`;

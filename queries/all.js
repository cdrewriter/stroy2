export const MainQuery = /* GraphQL */ `
    query {
        Main(where: { id: "5f7ef4dbd3ec864484349860" }) {
        title
        title__text
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
                publicUrl
                }
            }
            }
            image {
            publicUrl
            }
        }
`;
export const SmallBuildQuery = `
        query {
            SmallBuild(where: { id: "5f81b62e6e425c535ca01916" }) {
            id
            title
            title__text
            description
            image {
                publicUrl
            }
            }
        }
`;
export const allBuildObjectsQuery = `
        query {
            allBuildObjects(first: 5) {
        id
        title
        description
        image {
            publicUrl
        }
        }
        }

`;

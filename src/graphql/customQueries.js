export const getPurchaseHistory = /* GraphQL */ `
  query GetPurchaseHistory($id: ID!) {
    getUser(id: $id) {
      id
      email
      contactNo
      userGroup
      orders {
        items {
          id
          invoiceNumber
          paymentType
          sentPackaging
          collectionReady
          comment
          orderItems {
            items {
              id
              orderQuantity
              amount
              product {
                id
                name
                description
                image
                price
                stockQuantity
                createdBy
                createdAt
                category {
                  id
                  name
                  createdAt
                }
                orderItems {
                  nextToken
                }
              }
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;

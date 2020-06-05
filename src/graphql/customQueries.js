export const getUserDetailed = /* GraphQL */ `
  query GetUser($id: ID!) {
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
          createdAt
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

export const OutOfStock = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts({filter:{ stockQuantity:{eq:0}}}, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const updateOrderStatusQuery = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      sentPackaging
      collectionReady
    }
  }
`;

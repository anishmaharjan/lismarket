/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      contactNo
      userGroup
      orders {
        items {
          id
          paymentType
          sentPackaging
          collectionReady
          comment
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        contactNo
        userGroup
        orders {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      createdAt
      products {
        items {
          id
          name
          description
          image
          price
          stockQuantity
          createdBy
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        products {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
        products {
          nextToken
        }
      }
      orderItems {
        items {
          id
          orderQuantity
          amount
        }
        nextToken
      }
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      paymentType
      sentPackaging
      collectionReady
      comment
      users {
        id
        email
        contactNo
        userGroup
        orders {
          nextToken
        }
      }
      orderItems {
        items {
          id
          orderQuantity
          amount
        }
        nextToken
      }
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        paymentType
        sentPackaging
        collectionReady
        comment
        invoiceNumber
        users {
          id
          email
          contactNo
          userGroup
        }
        orderItems {
          items{
            id
            createdAt
            amount
            orderQuantity
            product
            {
              name
            }
          }
        }
      }
      nextToken
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
      id
      order {
        id
        paymentType
        sentPackaging
        collectionReady
        comment
        users {
          id
          email
          contactNo
          userGroup
        }
        orderItems {
          nextToken
        }
      }
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
  }
`;
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        order {
          id
          paymentType
          sentPackaging
          collectionReady
          comment
        }
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
        }
      }
      nextToken
    }
  }
`;

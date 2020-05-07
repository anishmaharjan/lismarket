/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
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
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
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
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
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

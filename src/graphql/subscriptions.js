/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem {
    onCreateOrderItem {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem {
    onUpdateOrderItem {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem {
    onDeleteOrderItem {
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

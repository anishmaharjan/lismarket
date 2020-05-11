import uuid from 'react-native-uuid';

export const USER_INFO = 'USER_INFO';
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS';

export const ITEMS = 'ITEMS';
export const ADD_ITEM = 'ADD_ITEM';

export const LIST_CATEGORY = 'LIST_CATEGORY';
export const LIST_CATEGORY_SUCCESS = 'LIST_CATEGORY_SUCCESS';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';

export const  LIST_PRODUCT = 'LIST_PRODUCT';
export const  LIST_PRODUCT_SUCCESS = 'LIST_PRODUCT_SUCCESS';

export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const GET_PRODUCTS_BY_CATEGORY_SUCCESS = 'GET_PRODUCTS_BY_CATEGORY_SUCCESS';


// ITEMS
export const getItems = () => ({
  type: ITEMS,
  payload: [
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ],
});

export const addItem = (text) => ({
  type: ADD_ITEM,
  payload: {id: uuid(), text: text},
});

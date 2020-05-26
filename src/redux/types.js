import uuid from 'react-native-uuid';

export const SS = '_SUCCESS';
export const ER = '_ERROR';

export const AUTH_SIGN_IN = 'AUTH_SIGN_IN';
export const AUTH_SIGN_OUT = 'AUTH_SIGN_OUT';
export const AUTH_SIGN_UP = 'AUTH_SIGN_UP';
export const AUTH_SIGN_UP_CONFIRM = 'AUTH_SIGN_UP_CONFIRM';
export const AUTH_USER_INFO = 'AUTH_USER_INFO';
export const AUTH_CHECK_USER = 'AUTH_CHECK_USER';

export const LIST_USERS = 'LIST_USERS';

export const GET_USER_API = 'GET_USER_API';
export const CREATE_USER_API = 'CREATE_USER_API';

export const ITEMS = 'ITEMS';
export const ADD_ITEM = 'ADD_ITEM';

export const LIST_CATEGORY = 'LIST_CATEGORY';
export const LIST_CATEGORY_SUCCESS = 'LIST_CATEGORY_SUCCESS';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

export const  ADD_PRODUCT = 'ADD_PRODUCT';
export const  LIST_PRODUCT = 'LIST_PRODUCT';
export const  DELETE_PRODUCT = 'DELETE_PRODUCT';
export const  UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const GET_PRODUCTS_BY_CATEGORY_SUCCESS = 'GET_PRODUCTS_BY_CATEGORY_SUCCESS';

export const LIST_ORDERS = 'LIST_ORDERS';



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

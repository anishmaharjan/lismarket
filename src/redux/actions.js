import uuid from 'react-native-uuid';
import {client} from '../util';
import gql from 'graphql-tag';
import {API, graphqlOperation} from 'aws-amplify';
import {listCategorys} from '../graphql/queries';
import {createCategory} from '../graphql/mutations';

export const USER = 'USER';
export const ITEMS = 'ITEMS';
export const ADD_ITEM = 'ADD_ITEM';

export const LIST_CATEGORY = 'LIST_CATEGORY';
export const LIST_CATEGORY_SUCCESS = 'LIST_CATEGORY_SUCCESS';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';

export const getUser = () => ({
  type: USER,
  payload: [{u: 'a'}],
});

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

import uuid from 'react-native-uuid';

export const USER = 'USER';
export const ITEMS = 'ITEMS';
export const ADD_ITEM = 'ADD_ITEM';

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
  payload: {id: uuid(), text: text}
});

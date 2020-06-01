import {API, graphqlOperation} from 'aws-amplify';
import {getCategory, listCategorys} from '../../graphql/queries';
import {createCategory, updateCategory} from '../../graphql/mutations';
import {
  SS, ER,
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_CATEGORY_SUCCESS,
  LIST_CATEGORY,
  LIST_CATEGORY_SUCCESS,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS
} from '../types';

export const listCategory = () => dispatch => ({
  type: LIST_CATEGORY,
  payload: API.graphql(graphqlOperation(listCategorys))
    .then(result => {
      dispatch({
        type: LIST_CATEGORY_SUCCESS,
        payload: result.data.listCategorys.items,
      });
    })
    .catch(e => {
      dispatch({
        type: LIST_CATEGORY + ER,
        payload: e,
      });
    }),
});

export const addCategory = category => dispatch => ({
  type: ADD_CATEGORY,
  payload: API.graphql(graphqlOperation(createCategory, {input: category}))
    .then(result => {
      dispatch({
        type: ADD_CATEGORY_SUCCESS,
        payload: result.data.createCategory,
      });
    })
    .catch(e => {
      dispatch({
        type: ADD_CATEGORY + ER,
        payload: e,
      });
    }),
});

export const getProductsByCategory = categoryId => dispatch => ({
  type: GET_PRODUCTS_BY_CATEGORY,
  payload: API.graphql(graphqlOperation(getCategory, {id: categoryId})).then(
    result => {
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
        payload: result.data.getCategory,
      });
    },
  ),
});

export const editCategory = category => dispatch =>
  dispatch({
    type: UPDATE_CATEGORY,
    payload: API.graphql(graphqlOperation(updateCategory, {input: category}))
      .then(result => {
        dispatch({
          type: UPDATE_CATEGORY + SS,
          payload: result.data.updateCategory,
        });
      })
      .catch(e => {
        dispatch({
          type: UPDATE_CATEGORY + ER,
          payload: e,
        });
      }),
  });

import {API, graphqlOperation} from 'aws-amplify';
import {getCategory, listCategorys} from '../../graphql/queries';
import {createCategory} from '../../graphql/mutations';
import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_CATEGORY_SUCCESS,
  LIST_CATEGORY,
  LIST_CATEGORY_SUCCESS,
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
    .catch(e => console.log('error listCategory', e)),
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
    .catch(e => console.log('Error add category', e)),
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

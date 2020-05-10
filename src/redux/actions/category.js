// category
import {API, graphqlOperation} from 'aws-amplify';
import {listCategorys} from '../../graphql/queries';
import {ADD_CATEGORY,ADD_CATEGORY_SUCCESS, LIST_CATEGORY, LIST_CATEGORY_SUCCESS} from '../actions';
import {createCategory} from '../../graphql/mutations';

export function listCategory() {
  return (dispatch, getState) => ({
    type: LIST_CATEGORY,
    payload: API.graphql(graphqlOperation(listCategorys)).then(r =>
        dispatch({type: LIST_CATEGORY_SUCCESS, payload: r.data.listCategorys.items}),
    ).catch(e => console.log('error', e)),
  });
}

export const addCategory = (category) => (dispatch) => ({
  type: ADD_CATEGORY,
  payload: API.graphql(graphqlOperation(createCategory, {input: category}))
      .then(result => {
        dispatch({
          type: ADD_CATEGORY_SUCCESS,
          payload: result.data.createCategory,
        });
      }
  )
});

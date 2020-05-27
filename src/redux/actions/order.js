import {API, graphqlOperation} from 'aws-amplify';
import {listOrders} from '../../graphql/queries';
import {
  SS, ER,  
  LIST_ORDERS,
} from '../types';

export const listOrder = () => (dispatch) => dispatch({
  type: LIST_ORDERS,
  payload: API.graphql(graphqlOperation(listOrders)).then(result => {
    dispatch({
      type: LIST_ORDERS + SS,
      payload: result.data.listOrders,
    });
  }).catch(e => dispatch({
    type: LIST_ORDERS + ER,
    payload: e,
  })),
});
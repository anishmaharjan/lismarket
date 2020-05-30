import {API, graphqlOperation} from 'aws-amplify';
import {listOrders} from '../../graphql/queries';
import {SS, ER, LIST_ORDERS, CREATE_ORDER, UPDATE_ORDER} from '../types';
import {createOrder, createOrderItem, updateOrder} from '../../graphql/mutations';

export const listOrder = () => dispatch =>
  ({
    type: LIST_ORDERS,
    payload: API.graphql(graphqlOperation(listOrders))
      .then(result => {
        dispatch({
          type: LIST_ORDERS + SS,
          payload: result.data.listOrders,
        });
      })
      .catch(e =>
        dispatch({
          type: LIST_ORDERS + ER,
          payload: e,
        }),
      ),
  });

export const createOrderApi = (order, orderItems, callBack) => dispatch =>
  dispatch({
    type: CREATE_ORDER,
    payload: API.graphql(graphqlOperation(createOrder, {input: order}))
      .then(result => {
        /* TODO: Do a bulk insert here */
        orderItems &&
          orderItems.map((itm, key) => {
            dispatch({
              type: 'CREATE_ORDER_ITEMS' + SS,
              payload: API.graphql(
                graphqlOperation(createOrderItem, {
                  input: {
                    orderItemOrderId: result.data.createOrder.id,
                    orderItemProductId: itm.id,
                    orderQuantity: itm.quantity,
                    amount: itm.price,
                  },
                }),
              ),
            });
          });

        dispatch({
          type: CREATE_ORDER + SS,
          payload: result.data.createOrder,
        });

        callBack(result);
      })
      .catch(err => {
        dispatch({
          type: CREATE_ORDER + ER,
          payload: err,
        });
      }),
  });

  export const editOrder = order => dispatch =>
  dispatch({
    type: UPDATE_ORDER,
    payload: API.graphql(graphqlOperation(updateOrder, {input: order}))
      .then(result => {
        dispatch({
          type: UPDATE_ORDER + SS,
          payload: result.data.updateOrder,
        });
      })
      .catch(e => {
        dispatch({
          type: UPDATE_ORDER + ER,
          payload: e,
        });
      }),
  });

  export const sentPackaging = orderId => dispatch =>
  dispatch({
    type: UPDATE_ORDER,
    payload: API.graphql(graphqlOperation(updateOrder, {input: {
      id: orderId,
      sentPackaging: true
    }
  }))
      .then(result => {
        dispatch({
          type: UPDATE_ORDER + SS,
          payload: result.data.updateOrder,
        });
      })
      .catch(e => {
        dispatch({
          type: UPDATE_ORDER + ER,
          payload: e,
        });
      }),
  });


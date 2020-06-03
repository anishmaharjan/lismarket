import {API, graphqlOperation} from 'aws-amplify';
import {listOrders} from '../../graphql/queries';
import {SS, ER, LIST_ORDERS, CREATE_ORDER, UPDATE_ORDER} from '../types';
import {
  createOrder,
  createOrderItem,
  updateOrder,
  updateProduct,
} from '../../graphql/mutations';

export const listOrder = () => dispatch =>
  dispatch({
    type: LIST_ORDERS,
    payload: API.graphql(graphqlOperation(listOrders))
      .then(result => {
        dispatch({
          type: LIST_ORDERS + SS,
          payload: result.data.listOrders,
        });
      })
      .catch(e => {
        console.log('List orders error', e);
        dispatch({
          type: LIST_ORDERS + ER,
          payload: e,
        });
      }),
  });

export const createOrderApi = (order, orderItems, callBack) => dispatch =>
  dispatch({
    type: CREATE_ORDER,
    payload: API.graphql(
      graphqlOperation(createOrder, {
        input: {
          invoiceNumber: order.invoiceNumber,
          paymentType: order.paymentType,
          sentPackaging: order.sentPackaging,
          collectionReady: order.collectionReady,
          orderUsersId: order.orderUsersId,
        },
      }),
    )
      .then(result => {
        orderItems &&
          orderItems.map((itm, key) => {
            /* TODO: Do a bulk insert here */
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
              ).catch(error =>
                console.log('Failed placing order items', error),
              ),
            });

            // change stock
            dispatch({
              type: 'ORDER_UPDATE_STOCK' + SS,
              payload: API.graphql(
                graphqlOperation(updateProduct, {
                  input: {
                    id: itm.id,
                    stockQuantity: Math.max(
                      0,
                      itm.stockQuantity - itm.quantity,
                    ),
                  },
                }),
              ).catch(error => console.log('Failed updating stock', error)),
            });
          });

        dispatch({
          type: CREATE_ORDER + SS,
          payload: result.data.createOrder,
        });
        callBack(result);
      })
      .catch(err => {
        console.log('Error creating order', err, order, orderItems);
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

export const sentPackaging_safe_to_delete = orderId => dispatch =>
  dispatch({
    type: UPDATE_ORDER,
    payload: API.graphql(
      graphqlOperation(updateOrder, {
        input: {
          id: orderId,
          sentPackaging: true,
        },
      }),
    )
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

export const updateOrderStatus = (
  orderId,
  {collectionReady, sentPackaging},
) => dispatch => {
  dispatch({
    type: UPDATE_ORDER,
    payload: API.graphql(
      graphqlOperation(updateOrder, {
        input: {
          id: orderId,
          collectionReady: collectionReady,
          sentPackaging: sentPackaging,
        },
      }),
    )
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
};

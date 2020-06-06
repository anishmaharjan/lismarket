import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {css} from '@emotion/native';
import {Button} from 'native-base';
import {updateOrderStatus} from '../../../redux/actions/order';
import {listOrders} from '../../../graphql/queries';
import moment from 'moment';
import gss from '../../variables.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as tm from '../../theme.style';
import {monefy, sendEmail} from '../../../util';

const OrderDetail = props => {
  const {navigation} = props;
  const {orderItems, orderDetails} = props.route.params;
  const {updatingOrderSuccess} = props;

  const icon = `font-size: 22px;
              padding: 3px 5px;
              `;

  useEffect(() => {
    if (updatingOrderSuccess === true) {
      navigation.goBack();
    }
  });

  const ctaButtons = () => {
    const {dispatch, updateOrderStatus} = props;
    const {collectionReady, sentPackaging} = orderDetails;

    if (collectionReady === true && sentPackaging === true) {
      return (
        <Button
          activeOpacity={1}
          style={css`
            justify-content: center;
            margin: 10px;
          `}>
          <FontAwesome5
            name={'info-circle'}
            style={css`
              ${icon}
              color: white;
            `}
          />
          <Text
            style={css`
              font-size: 20px;
              color: white;
            `}>
            Order collected
          </Text>
        </Button>
      );
    }
    if (collectionReady === true && sentPackaging === false) {
      return (
        <Button
          onPress={() =>
            dispatch(
              updateOrderStatus(orderDetails.id, {
                collectionReady: true,
                sentPackaging: true,
              }),
            )
          }
          style={{
            justifyContent: 'center',
            backgroundColor: '#21b83f',
            borderRadius: 5,
            margin: 10,
          }}>
          <FontAwesome5
            name={'check'}
            style={css`
              ${icon}
              color: white;
            `}
          />
          <Text style={{fontSize: 20, color: '#FFF'}}>Set order picked up</Text>
        </Button>
      );
    }
    if (collectionReady === false && sentPackaging === true) {
      return (
        <Button
          onPress={() =>
            dispatch(
              updateOrderStatus(
                orderDetails.id,
                {
                  collectionReady: true,
                  sentPackaging: false,
                },
                () => {
                  sendEmail({
                    to: props.authUser.email,
                    subject: 'Collection ready',
                    content: {
                      text: 'Hello, Your order is ready to be collected.',
                    },
                  });
                },
              ),
            )
          }
          style={{
            justifyContent: 'center',
            backgroundColor: '#FC8369',
            borderRadius: 5,
          }}>
          <FontAwesome5
            name={'box'}
            style={css`
              ${icon}
              color: white;
            `}
          />
          <Text style={{fontSize: 20, color: '#FFF'}}>Packaging Complete</Text>
        </Button>
      );
    }
    if (collectionReady === false && sentPackaging === false) {
      return (
        <Button
          onPress={() =>
            dispatch(
              updateOrderStatus(orderDetails.id, {
                collectionReady: false,
                sentPackaging: true,
              }),
            )
          }
          style={{
            justifyContent: 'center',
            backgroundColor: '#6db4d0',
            borderRadius: 5,
          }}>
          <FontAwesome5
            name={'box-open'}
            style={css`
              ${icon}
              color: white;
            `}
          />
          <Text style={{fontSize: 20, color: '#FFF'}}>Send to package</Text>
        </Button>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={{paddingLeft: 20, paddingTop: 5}}>
          <FontAwesome5
            name={'receipt'}
            style={css`
              ${icon}
              color: ${gss.primary};
            `}
          />
          <Text style={{fontSize: 20}}>Invoice No:</Text>
        </Text>
        <Text
          style={css`
            font-size: 22px;
            font-weight: bold;
            text-align: center;
          `}>
          #{orderDetails.invoiceNumber}
        </Text>
        <Text style={{paddingLeft: 20, paddingTop: 5, fontSize: 16}}>
          Placed on {moment(orderDetails.createdAt).format('DD MMM, YYYY')}
        </Text>
        <Text
          style={css`
            ${tm.h1}
            text-align: right;
            color: #2c6837;
          `}>
          Invoice:-
          {monefy(
            orderItems &&
              orderItems.items &&
              orderItems.items.reduce(
                (total, item) => total + item.amount * item.orderQuantity,
                0,
              ),
          )}
        </Text>
      </View>
      <View
        style={css`
          margin: 20px 20px;
        `}>
        {ctaButtons()}
      </View>

      <ScrollView
        style={css`
          ${tm.paddingWalls}
        `}>
        {orderItems &&
          orderItems.items &&
          orderItems.items.map((item, key) => (
            <View
              key={key + 'orderitems'}
              style={css`
                padding: 10px;
                border-bottom-width: 1px;
                border-bottom-color: #fc8369;
                margin: 10px 0;
                ${tm.flexRow}
                justify-content: space-between;
              `}>
              <View style={css``}>
                <Text>{key + 1}</Text>
                <View style={{marginLeft: 10}}>
                  <Text style={{fontSize: 20}}>{item.product.name}</Text>
                  <Text style={{fontSize: 16}}>
                    Qty: {item.orderQuantity} @ {monefy(item.amount)}
                  </Text>
                </View>
              </View>
              <Text
                style={css`
                  font-weight: bold;
                  ${tm.h3}
                `}>
                {monefy(item.orderQuantity * item.amount)}
              </Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    padding: 5,
    backgroundColor: '#FAF7F7',
    marginBottom: 1,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default connect(
  state => ({
    authUser: state.auth.authUser,
    updatingOrderSuccess: state.order.updatingOrderSuccess,
  }),
  dispatch => ({
    dispatch,
    updateOrderStatus,
  }),
)(OrderDetail);

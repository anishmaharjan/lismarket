import React, {useEffect, useState} from 'react';

import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Container, Spinner} from 'native-base';
import {css} from '@emotion/native';
import * as tm from '../theme.style';
import CartSummary from './CartSummary';
import {Input} from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {createOrderApi} from '../../redux/actions/order';
import uuid from 'react-native-uuid';
import {clearCart} from '../../redux/actions/cart';

import {calculateTotal, getRandomInt, monefy, sendEmail} from '../../util';
import {useNavigation} from '@react-navigation/native';
import {listAllProducts} from '../../redux/actions/product';

const CheckoutScreen = props => {
  const {
    processingPayment,
    successPayment,
    dispatch,
    createOrder,
    authUser,
    cart,
    cartTotal,
    listAllProducts,
  } = props;

  const navigation = useNavigation();

  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentOption, setPaymentOption] = useState('paypal');
  const [order, setOrder] = useState({
    invoiceNumber:
      'INV-' +
      authUser.sub.substring(0, 3).toUpperCase() +
      getRandomInt(10000, 99999),
    paymentType: paymentOption,
    sentPackaging: false,
    collectionReady: false,
    orderUsersId: authUser.sub,
  });

  useEffect(() => {
    setOrder(prev => ({...prev, paymentType: paymentOption}));
  }, [paymentOption]);

  const handleChange = (name, val) => {
    setOrder(prev => ({...prev, [name]: val}));
  };

  const submitPayment = () => () => {
    //validate
    if (order.paymentType === 'bankCard') {
      let today = new Date();
      let providedDate = new Date();

      if (!order.cardNumber || !order.month || !order.year || !order.cvv) {
        setErrorMessage('Please fill all the fields.');
        return;
      }

      if (!order.cardNumber.includes('4242424242424242')) {
        setErrorMessage('Card number is invalid.');
        return;
      }

      providedDate.setFullYear(order.year, order.month, 1);
      if (providedDate < today) {
        setErrorMessage(
          "The expiry date is before today's date. Please select a valid expiry date",
        );
        return;
      }
      setErrorMessage(null);
    }

    dispatch(
      createOrder(order, cart, orderSummary => {
        //pay success
        sendEmail({
          to: authUser.email,
          subject: 'Payment made',
          content: {
            text: `Payment successful for ${monefy(calculateTotal(cart))}.`,
          },
        });

        //clear cart
        navigation.navigate('PaymentSuccessScreen', {
          amountPaid: calculateTotal(cart),
          order: order,
        });
        dispatch(listAllProducts());
        dispatch(clearCart());
      }),
    );
  };

  return (
    <Container>
      <ScrollView>
        <CartSummary />
        <View
          style={css`
            ${tm.paddingWalls}
          `}>
          <Text>Payment option</Text>
        </View>
        <View
          style={css`
            ${tm.paddingWalls}
          `}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={css`
              padding: 15px;
              background: ${paymentOption === 'paypal' ? '#8ac' : '#ccc'};
              ${tm.flexRow}
              justify-content: space-between;
              margin-bottom: 10px;
            `}
            onPress={() => setPaymentOption('paypal')}>
            <Text
              style={css`
                ${tm.h3}
              `}>
              Paypal
            </Text>
            <View>
              <FontAwesome5Icon
                name={'cc-paypal'}
                style={css`
                  font-size: 20px;
                `}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={css`
              padding: 15px;
              background: ${paymentOption === 'bankCard' ? '#8ac' : '#ccc'};
              ${tm.flexRow}
              justify-content: space-between;
              margin-bottom: 10px;
            `}
            onPress={() => setPaymentOption('bankCard')}>
            <Text
              style={css`
                ${tm.h3}
              `}>
              Bank Cards
            </Text>
            <View>
              <FontAwesome5Icon
                name={'credit-card'}
                style={css`
                  font-size: 20px;
                `}
              />
            </View>
          </TouchableOpacity>
          {paymentOption === 'bankCard' && (
            <View>
              <View
                style={css`
                  padding: 20px 0;
                `}>
                <Input
                  placeholder="Card Number xxxx-xxxx-xxxx-xxxx"
                  onChangeText={val => handleChange('cardNumber', val)}
                  containerStyle={css``}
                  maxLength={16}
                />
              </View>
              <View
                style={css`
                  ${tm.flexRow}
                  justify-content: space-evenly;
                `}>
                <Input
                  placeholder="MM"
                  onChangeText={val => handleChange('month', val)}
                  containerStyle={css`
                    width: 30%;
                  `}
                  maxLength={2}
                />
                <Input
                  placeholder="YY"
                  onChangeText={val => handleChange('year', val)}
                  containerStyle={css`
                    width: 30%;
                  `}
                  maxLength={4}
                />
                <Input
                  placeholder="CVV"
                  onChangeText={val => handleChange('cvv', val)}
                  containerStyle={css`
                    width: 30%;
                  `}
                  maxLength={3}
                />
              </View>
              <Text
                style={css`
                  color: red;
                `}>
                {errorMessage}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View
        style={css`
          padding: 20px;
          margin-bottom: 10px;
        `}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={css`
            ${tm.btn}
            align-items: center;
            margin-left: 30%;
          `}
          onPress={submitPayment()}>
          <Text
            style={css`
              ${tm.btnText}
            `}>
            Pay
          </Text>
        </TouchableOpacity>
      </View>

      {processingPayment && (
        <View>
          <View
            style={css`
              width: 100%;
              height: 100%;
              background: #ccc;
              opacity: 0.7;
              position: absolute;
            `}
          />
          <View
            style={css`
              position: absolute;
              top: 40%;
              left: 40%;
            `}>
            <Spinner color="blue" />
            <Text>Processing...</Text>
          </View>
        </View>
      )}
    </Container>
  );
};

export default connect(
  state => ({
    authUser: state.auth.authUser,
    cart: state.cart.cartItems,
    cartTotal: state.cart.cartTotal,
    processingPayment: state.order.processingPayment,
    successPayment: state.order.successPayment,
  }),
  dispatch => ({
    dispatch,
    createOrder: createOrderApi,
    clearCart,
    listAllProducts,
  }),
)(CheckoutScreen);

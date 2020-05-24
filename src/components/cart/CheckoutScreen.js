import React, {useState} from 'react';

import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Container, Accordion} from 'native-base';
import {css} from '@emotion/native';
import * as tm from '../theme.style';
import CartSummary from './CartSummary';
import {Input} from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const CheckoutScreen = props => {
  const [form, setForm] = useState(null);

  const handleChange = (name, val) => {
    setForm(prev => ({...prev, [name]: val}));
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
        <Text>Paypal</Text>
        <View
          style={css`
            ${tm.paddingWalls}
          `}>
          <View
            style={css`
              padding: 15px;
              background: #ccc;
              ${tm.flexRow}
              justify-content: space-between;
            `}>
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
          </View>
          <View
            style={css`
              padding: 20px 0;
            `}>
            <Input
              placeholder="Card Number xxxx-xxxx-xxxx-xxxx"
              onChangeText={val => handleChange('cardNumber', val)}
              containerStyle={css``}
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
            />
            <Input
              placeholder="YY"
              onChangeText={val => handleChange('year', val)}
              containerStyle={css`
                width: 30%;
              `}
            />
            <Input
              placeholder="CVV"
              onChangeText={val => handleChange('cvv', val)}
              containerStyle={css`
                width: 30%;
              `}
            />
          </View>
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
          `}>
          <Text
            style={css`
              ${tm.btnText}
            `}>
            Pay
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default CheckoutScreen;

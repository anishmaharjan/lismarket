import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {css} from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import {Badge} from 'react-native-elements';
import {connect} from 'react-redux';
import * as tm from './theme.style';

const Header = props => {
  const navigation = useNavigation();

  const {cart} = props;
  return (
    <View
      style={css`
        flex-direction: row;
        justify-content: space-between;
        height: 50px;
        padding: 10px 20px;
      `}>
      <TouchableOpacity>
        <Text
          style={css`
            font-size: 24px;
            font-weight: 600;
            ${tm.primary}
          `}>
          LI Market
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
        <FontAwesome5
          name={'shopping-cart'}
          style={css`
            font-size: 24px;
            padding-bottom: 5px;
          `}
        />
        {cart.length !== 0 && (
          <Badge
            status="warning"
            value={cart.length}
            containerStyle={css`
              position: absolute;
              top: 5px;
              right: 10px;
              width: 90%;
            `}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default connect(state => ({
  cart: state.cart.cartItems,
}))(Header);

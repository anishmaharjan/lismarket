import React, {useEffect, useState} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {Container, Picker} from 'native-base';
import {Image, Button} from 'react-native-elements';
import {css} from '@emotion/native';
import Header from '../Header';
import * as tm from '../theme.style';
import {monefy} from '../../util';
import {defaultQty, failSafeImage} from '../../consts';
import {addToCart} from '../../redux/actions/cart';
import {connect} from 'react-redux';
import Footer from '../Footer';

const ProductDetails = props => {
  const {route, dispatch, addToCart} = props;
  const {product, quantity, setQuantity} = route.params;

  const [locoQuantity, setLocoQuantity] = useState(quantity);

  useEffect(() => {
    setQuantity(locoQuantity);
  }, [locoQuantity, setQuantity]);

  return (
    <Container>
      <Header />
      <Image
        source={{uri: product.image || failSafeImage}}
        style={css`
          width: 100%;
          min-height: 40%;
        `}
      />
      <View
        style={css`
          ${tm.paddingWalls}
        `}>
        <Text
          style={css`
            ${tm.h1}
          `}>
          {product.name}
        </Text>
        <Text
          style={css`
            ${tm.h1}
          `}>
          {monefy(product.price)}
        </Text>

        <Text
          style={css`
            color: #828282;
            ${tm.pt2}
          `}>
          Product details:
        </Text>
        <Text
          style={css`
            ${tm.h3} min-height: 100px;
            font-family: ${Platform.OS === 'ios' ? 'Roboto' : 'Roboto.ttf'};
          `}>
          {product.description}
        </Text>

        <View
          style={css`
            ${tm.flexRow}
          `}>
          <Picker
            note
            iosHeader="Select quantity"
            mode="dropdown"
            style={css`
              width: 70px;
              background: #eee;
            `}
            textStyle={css`
              color: black;
            `}
            itemTextStyle={{fontSize: 18}}
            selectedValue={locoQuantity}
            onValueChange={val => setLocoQuantity(val)}>
            {defaultQty.map((v, i) => (
              <Picker.Item key={i} label={v} value={v} />
            ))}
          </Picker>

          <TouchableOpacity
            style={css`
              ${tm.btn}
              margin: 0 10px;
            `}
            onPress={() =>
              dispatch(addToCart({...product, quantity: locoQuantity}))
            }>
            <Text
              style={css`
                ${tm.btnText}
              `}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </Container>
  );
};

export default connect(
  null,
  dispatch => ({
    dispatch,
    addToCart,
  }),
)(ProductDetails);

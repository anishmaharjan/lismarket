import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Container, Picker} from 'native-base';
import {Image, Button} from 'react-native-elements';
import {css} from '@emotion/native';
import Header from '../Header';
import * as tm from '../theme.style';
import {monefy} from '../../util';
import {defaultQty, failSafeImage} from '../../consts';

const ProductDetails = props => {
  const {route} = props;
  const {product, quantity, setQuantity} = route.params;

  return (
      <Container>
        <Header/>
        <Image source={{uri: product.image || failSafeImage}} style={css`
          width: 100%;
          min-height: 40%;
          `}/>
        <View style={css`${tm.paddingWalls}`}>
          <Text style={css`${tm.h1}`}>{product.name}</Text>
          <Text style={css`${tm.h1}`}>{monefy(product.price)}</Text>

          <Text style={css`color: #828282; ${tm.pt2}`}>Product details:</Text>
          <Text style={css`${tm.h3} min-height: 100px;`}>{product.description}</Text>

          <View style={css`${tm.flexRow}`}>
            <Picker
                note
                iosHeader="Select quantity"
                mode="dropdown"
                style={css`width:70px; background:#eee;`}
                textStyle={css`color:black`}
                itemTextStyle={{fontSize: 18}}
                selectedValue={quantity}
                onValueChange={val => setQuantity(val)}

            >
              {defaultQty.map((v, i) =>
                  <Picker.Item key={i} label={v} value={v}/>,
              )}
            </Picker>

            <TouchableOpacity style={css`${tm.btn}
            margin: 0 10px;
            `} onPress={() => {}}>
              <Text style={css`${tm.btnText}`}>Add to cart</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Container>
  );
};

export default ProductDetails;
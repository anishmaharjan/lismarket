import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {css} from '@emotion/native';
import {outOfStock} from '../../../redux/actions/product';
import {Root, Container} from 'native-base';
import {Button} from 'react-native-elements';
import * as tm from '../../theme.style';
import {failSafeImage} from '../../../consts';
import gas from '../../variables.styles';

const NoStock = props => {
  const {noStockProducts} = props;
  const {dispatch, outOfStock} = props;

  useEffect(() => {
    dispatch(outOfStock());
  }, [outOfStock, dispatch]);

  return (
    <Root>
      <Container>
        <View>
          <ScrollView
            style={css`
              ${tm.paddingWalls}
            `}>
            {noStockProducts && noStockProducts.items.length === 0 && (
              <View>
                <Text>No items are out of stock</Text>
              </View>
            )}
            {noStockProducts &&
              noStockProducts.items &&
              noStockProducts.items.map((product, key) => (
                <View
                  key={key}
                  style={css`
                    padding: 12px 10px;
                    margin-bottom: 20px;
                    border-bottom-width: 1px;
                    border-bottom-color: #ff914d;
                  `}>
                  <View
                    style={css`
                      ${tm.flexRow}
                      padding-left: 5px;
                    `}>
                    <Image
                      source={{uri: product.image || failSafeImage}}
                      style={css`
                        width: 50px;
                        height: 50px;
                      `}
                    />
                    <Text
                      style={css`
                        font-size: 22px;
                        font-weight: 600;
                        padding: 5px;
                      `}>
                      {product.name}
                    </Text>
                    <Text>( {product.category.name} )</Text>
                  </View>
                  <View>
                    <Text
                      style={css`
                        font-size: 18px;
                        font-weight: 500;
                        padding: 5px;
                      `}>
                      Qty: {product.stockQuantity}
                    </Text>
                    <Button
                      title={'Update'}
                      type={'outline'}
                      onPress={() =>
                        props.navigation.navigate('StockChange', {
                          product: product,
                        })
                      }
                      titleStyle={css`
                        color: ${gas.text};
                      `}
                      buttonStyle={css`
                        border-color: ${gas.text};
                      `}
                    />
                  </View>
                </View>
              ))}
          </ScrollView>
        </View>
      </Container>
    </Root>
  );
};
export default connect(
  state => ({
    noStockProducts: state.product.noStockProducts,
  }),
  dispatch => ({
    dispatch,
    outOfStock: outOfStock,
  }),
)(NoStock);

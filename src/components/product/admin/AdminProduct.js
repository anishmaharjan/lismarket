import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {css} from '@emotion/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {delProduct, listAllProducts} from '../../../redux/actions/product';
import {Root, Container, Header, Content, ActionSheet} from 'native-base';
import gas from '../../variables.styles';
import * as tm from '../../theme.style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AdminProduct = props => {
  const {products} = props;
  const {dispatch, deleteProduct, deletingProductSuccess} = props;

  useEffect(() => {
    if (deletingProductSuccess === true) {
      dispatch(listAllProducts());
    }
  }, [deletingProductSuccess, dispatch]);

  const productDelete = productId => {
    dispatch(deleteProduct({id: productId}));
  };

  const borderBottom = `
  border-bottom-width: 1px; 
  border-bottom-color: #333;
  padding: 5px 0;
  `;

  const flexRow = `
  flex-direction: row;`;

  const flexColumn = `
  flex-direction: column;`;

  const padding = `
  padding: 0 5px;
  `;

  return (
    <Root>
      <Container>
        <View>
          <Button
            title="Add Product"
            type="outline"
            onPress={() => props.navigation.navigate('AddProduct')}
          />
          <ScrollView
            style={css`
              ${tm.paddingWalls}
            `}>
            {products &&
              products.items &&
              [...products.items].map((product, key) => (
                <View
                  key={key}
                  style={css`
                    flex-direction: row;
                    justify-content: space-between;
                    ${tm.borderBottom}
                  `}>
                  <TouchableOpacity
                    style={css`
                      ${flexRow};
                    `}>
                    <Image
                      source={{
                        uri:
                          product.image ||
                          'https://localfoodconnect.org.au/wp-content/uploads/2015/09/tomato.png',
                      }}
                      style={css`
                        height: 50px;
                        width: 50px;
                        margin: 5px 5px;
                      `}
                    />
                    <View
                      style={css`
                        ${flexColumn};
                        padding-left: 15px;
                      `}>
                      <Text
                        style={css`
                          font-size: 20px;
                        `}>
                        {product.name}
                        <Text style={{fontSize: 16, color: '#4F4F4F'}}>
                          ({product.category.name})
                        </Text>
                      </Text>
                      <Text
                        style={css`
                          font-size: 16px;
                        `}>
                        {product.description}
                      </Text>
                      <Text
                        style={css`
                          font-size: 16px;
                        `}>
                        Price: $ {product.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={css`
                      flex-direction: row;
                      padding-right: 20;
                      padding-top: 15;
                    `}>
                    <TouchableOpacity
                      style={css`
                        ${padding};
                      `}
                      onPress={() =>
                        props.navigation.navigate('EditProduct', {
                          product: product,
                        })
                      }>
                      <FontAwesome5
                        name={'edit'}
                        style={css`
                          font-size: 24px;
                          padding-bottom: 5px;
                          color: ${gas.text};
                        `}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={css`
                        ${padding}
                      `}
                      onPress={() => productDelete(product.id)}>
                      <FontAwesome5
                        name={'trash'}
                        style={css`
                          font-size: 24px;
                          padding-bottom: 5px;
                          color: ${gas.text};
                        `}
                      />
                    </TouchableOpacity>
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
    products: state.product.products,
    deletingProductSuccess: state.product.deletingProductSuccess,
  }),
  dispatch => ({
    dispatch,
    deleteProduct: delProduct,
  }),
)(AdminProduct);

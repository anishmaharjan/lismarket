import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {css} from '@emotion/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {listAllProducts} from '../../../redux/actions/product';
import {Root, Container, Item, Input} from 'native-base';
import {failSafeImage} from '../../../consts';

const Inventory = props => {
  const {products} = props;
  const {dispatch, addProduct, delProduct} = props;

  useEffect(() => {
    !products && dispatch(listAllProducts());
  }, [dispatch, products]);

  const [search, setSearch] = useState('');

  const handleSearch = text => {
    setSearch(text);
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

  const alignItemEnd = `
  align-items: flex-end;`;

  const alignItemStart = `
    align-items: flex-start;`;

  const justifyContent = `
   justify-content: space-between;`;

  const padding = `
  padding: 0 5px;
  `;

  return (
    <Root>
      <Container>
        <View
          style={css`
            padding: 0 10px;
          `}>
          <Item rounded style={css``}>
            <Icon
              name="search"
              size={20}
              style={css`
                padding: 5px;
              `}
            />
            <Input placeholder="Search" onChangeText={handleSearch} />
          </Item>
        </View>
        <View>
          <ScrollView>
            {products &&
              products.items &&
              products.items
                .filter(fil =>
                  search === ''
                    ? true
                    : fil.name.toLowerCase().includes(search.toLowerCase()),
                )
                .map((product, key) => (
                  <View
                    key={key}
                    style={css`
                      padding: 12px 10px;
                      flex: 1;
                      flex-direction: row;
                      justify-content: space-between;
                      border-bottom-width: 1px;
                      border-bottom-color: #ff914d;
                    `}>
                    <View
                      style={css`
                        padding-left: 5px;
                        flex: 1;
                      `}>
                      <Image
                        source={{uri: product.image || failSafeImage}}
                        style={css`
                          height: 40px;
                          width: 40px;
                          margin: 0 5px;
                        `}
                      />
                    </View>
                    <View
                      style={css`
                        padding-left: 5px;
                        flex: 2;
                      `}>
                      <Text
                        style={css`
                          font-size: 18px;
                        `}>
                        {product.name}
                      </Text>
                    </View>
                    <View
                      style={css`
                        padding-left: 20;
                        flex: 1;
                      `}>
                      <Text
                        style={css`
                          font-size: 16px;
                        `}>
                        {' '}
                        QTY: {product.stockQuantity}
                      </Text>
                    </View>

                    <View
                      style={css`
                        padding-right: 5;
                      `}>
                      <TouchableOpacity
                        style={css`
                          ${padding};
                        `}
                        onPress={() =>
                          props.navigation.navigate('StockChange', {
                            product: product,
                          })
                        }>
                        <Icon name="edit" size={30} />
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
  }),
  dispatch => ({
    dispatch,
  }),
)(Inventory);

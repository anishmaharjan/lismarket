import React, {useState, useEffect} from 'react';
import {Container, Text, Item, Icon, Input} from 'native-base';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Picker} from 'native-base';
import {connect} from 'react-redux';
import {css} from '@emotion/native';
import Header from '../Header';
import EachItem from './EachItem';
import * as tm from '../theme.style';

const ProductList = props => {
  const {route, navigation, products, categories} = props;
  const {category} = route.params;

  const [search, setSearch] = useState('');

  const handleSearch = text => {
    setSearch(text);
  };

  return (
    <Container>
      <View>
        <Header />
        <View
          style={css`
            padding: 0 10px;
          `}>
          <Item rounded style={css``}>
            <Icon active name="search" />
            <Input placeholder="Search" onChangeText={handleSearch} />
          </Item>
        </View>
        <ScrollView horizontal={true}>
          <View
            style={css`
              flex-direction: row;
              align-items: baseline;
              min-height: 70px;
              padding: 10px 20px;
            `}>
            {categories &&
              categories.map((cat, key) => (
                <View key={'category' + key}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductList', {
                        category: cat,
                      })
                    }
                    style={css`
                      ${cat.id === category.id && tm.activeCategoryBorder}
                    `}>
                    <Text
                      style={css`
                        padding: 5px 10px;
                        ${cat.id === category.id && tm.activeCategory}
                      `}>
                      {cat.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </ScrollView>
        <ScrollView>
          {products &&
            products.items &&
            products.items
              .filter(fil => category.id === fil.category.id)
              .filter(fil =>
                search === ''
                  ? true
                  : fil.name.toLowerCase().includes(search.toLowerCase()),
              )
              .map((product, key) => (
                <EachItem key={'product-list' + key} product={product} />
              ))}
        </ScrollView>
      </View>
    </Container>
  );
};
export default connect(state => ({
  categories: state.category.categories,
  products: state.product.products,
}))(ProductList);

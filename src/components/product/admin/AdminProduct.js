import React,{useState, useEffect} from 'react';
import {Button, Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {css} from '@emotion/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {delProduct,listAllProducts} from '../../../redux/actions/product';
import {Root, Container, Header, Content, ActionSheet} from 'native-base';

const AdminProduct = props => {
  const {products} = props;
  const {dispatch, addProduct, delProduct, deletingProductSuccess} = props;
     
  useEffect(()=>{
    if(deletingProductSuccess === true)
    {
      dispatch(listAllProducts());
    }
  },[deletingProductSuccess])

  const productDelete = (productId) =>
  {
      dispatch(delProduct({id: productId}));
  }

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
              title='Add Product'
              onPress={() => props.navigation.navigate('AddProduct')}
          />        
          <ScrollView>
            {
              products && products.items && [...products.items].map((product, key) =>
                  <View key={key} style={css`
                padding: 13px 10px;
                flex-direction: row;
                justify-content: space-between;
                border-bottom-width: 1px;
                border-bottom-color: #333;
                `}>
                    <TouchableOpacity style={css`${flexRow};`} >
                      <Image source={{uri: 'https://localfoodconnect.org.au/wp-content/uploads/2015/09/tomato.png'}} style={css`
                    height: 50px;
                    width: 50px;
                    margin: 5px 5px;
                    `}/>
                     <View style={css`${flexColumn}; padding-left: 15px;`}>
                          <Text style={css`
                           font-size: 20px;
                         `}>{product.name}<Text style={{fontSize:16, color:'#4F4F4F'}}>({product.category.name})</Text></Text>
                      <Text style={css`
                      font-size: 16px;
                      `}>{product.description}</Text>
                      <Text style={css`
                        font-size: 16px;
                      `}>Price: $ {product.price}</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={css`
                  flex-direction: row;
                  padding-right: 20; 
                  padding-top: 15;               
                  `}>
                      <TouchableOpacity style={css`
                    ${padding};
                    `}  onPress={() => props.navigation.navigate('EditProduct',{product: product})}><Icon name="edit" size={30} /></TouchableOpacity>
                      <TouchableOpacity style={css`
                    ${padding}
                    `} onPress={()=>productDelete(product.id)}><Icon name="trash" size={30} /></TouchableOpacity>
                    </View>

                  </View>,
              )}
          </ScrollView>
        </View>
      </Container>
      </Root>
  );
};
export default connect(state => ({
  products: state.product.products,
  deletingProductSuccess: state.product.deletingProductSuccess,
}),  dispatch => ({
      dispatch,
      delProduct,
 }))(AdminProduct);

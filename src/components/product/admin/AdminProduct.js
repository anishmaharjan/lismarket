import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {css} from '@emotion/native';

import {Root, Container, Header, Content, ActionSheet} from 'native-base';

const AdminProduct = props => {
  const {products} = props;

  const borderBottom = `
  border-bottom-width: 1px; 
  border-bottom-color: #333;
  padding: 5px 0;
  `;

  const flexRow = `
  flex-direction: row;`;

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
          <View style={css`
        `}>

            <Button
                title="Action"
                onPress={() =>
                    ActionSheet.show(
                        {
                          options: ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'],
                          // cancelButtonIndex: 3,
                          // destructiveButtonIndex: 4,
                          title: 'Testing ActionSheet',
                        },
                        buttonIndex => {
                          console.log(buttonIndex);
                          // this.setState({ clicked: BUTTONS[buttonIndex] });
                        },
                    )}
            >
              <Text>Confirm</Text>
            </Button>
          </View>

          <View>
            {
              products && products.items && [...products.items,...products.items,...products.items,...products.items,...products.items].map((product, key) =>
                  <View key={key} style={css`
                padding: 10px 20px;
                flex-direction: row;
                justify-content: space-between;
                `}>
                    <TouchableOpacity style={css`${borderBottom}${flexRow}`}>
                      <Image source={{uri: 'https://localfoodconnect.org.au/wp-content/uploads/2015/09/tomato.png'}} style={css`
                    height: 50px;
                    width: 50px;
                    margin: 0 5px;
                    `}/>
                      <Text style={css`
                    font-size: 20px;
                    `}>{product.name}</Text>
                    </TouchableOpacity>
                    <View style={css`
                  flex-direction: row;
                  `}>
                      <TouchableOpacity style={css`
                    ${padding}
                    `}><Text>Edit</Text></TouchableOpacity>
                      <TouchableOpacity style={css`
                    ${padding}
                    `}><Text>Delete</Text></TouchableOpacity>
                    </View>

                  </View>,
              )}
          </View>
        </View>
      </Container>
      </Root>
  );
};
export default connect(state => ({
  products: state.product.products,
}), null)(AdminProduct);

import React from 'react';
import {Button, Text, View} from 'react-native';

export default props => {
  return (
      <View>
        <Button
            title='Add Product'
            onPress={() => props.navigation.navigate('AddProduct')}
        />
      </View>
  )
}

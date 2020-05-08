import React from 'react';
// import {Text, View} from 'react-native-reanimated';
import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import styled, { css } from '@emotion/native';

const AddCategory = (props) => {
  const {navigation} = props;

  const Description = styled.Text({
    color: 'hotpink'
  })

  return (<View style={css`
          flex: 1;
          `}>
    <Text style={css`
      font-size: 40px;
    `}>This is a modal!</Text>
    <Button onPress={() => navigation.goBack()} title="Dismiss"/>
  </View>);
};

export default AddCategory;

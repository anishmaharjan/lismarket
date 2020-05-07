import React from 'react';
// import {Text, View} from 'react-native-reanimated';
import {View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';


const AddCategory = ({navigation}) => {
  return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 30 }}>This is a modal!</Text>
    <Button onPress={() => navigation.goBack()} title="Dismiss" />
  </View>);
};

export default AddCategory;

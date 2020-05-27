import {css} from '@emotion/native';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default props => {
  const navigation = useNavigation();

  return (
    <View
      style={css`
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        height: 120px;
        position: absolute;
        bottom: -20px;
        border: solid 1px #eaeaea;
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
        border-radius: 25px;
        padding: 15px 10px;
        background-color: #fff;
      `}>
      <TouchableOpacity
        style={css`
          align-items: center;
        `}
        onPress={() => navigation.navigate('Home')}>
        <FontAwesome5
          name={'home'}
          style={css`
            font-size: 24px;
            padding-bottom: 5px;
          `}
        />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={css`
          align-items: center;
        `}>
        <FontAwesome5
          name={'apple-alt'}
          style={css`
            font-size: 24px;
            padding-bottom: 5px;
          `}
        />
        <Text>Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={css`
          align-items: center;
        `}
        onPress={() => navigation.navigate('Menu')}>
        <FontAwesome5
          name={'bars'}
          style={css`
            font-size: 24px;
            padding-bottom: 5px;
          `}
        />
        <Text>More</Text>
      </TouchableOpacity>
    </View>
  );
};

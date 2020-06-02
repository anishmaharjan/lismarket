import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styled, {css} from '@emotion/native';

import gss from '../variables.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Category = props => {
  const {category, navigation} = props;

  return (
    <View>
      <ScrollView>
        <View
          style={css`
            flex-direction: row;
            padding: 10px 20px;
            flex-wrap: wrap;
            justify-content: flex-start;
          `}>
          {category &&
            [...category, ...category, ...category].map((item, key) => (
              <TouchableOpacity
                key={'category-list' + key}
                onPress={() =>
                  navigation.navigate('ProductList', {
                    category: item,
                  })
                }
                style={css`
                  padding: 10px 10px;
                  box-shadow: 3px 3px 2px ${gss.primary};
                `}>
                <View
                  style={css`
                    padding: 10px;
                    height: 100px;
                    width: 100px;
                    background-color: white;
                    // border-width: 1px;
                    border-radius: 9px;
                    align-items: center;
                    justify-content: center;
                  `}>
                  <FontAwesome5
                    name={item.image || 'circle-notch'}
                    style={css`
                      font-size: 24px;
                      padding-bottom: 5px;
                    `}
                  />
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default connect(state => ({
  category: state.category.categories,
}))(Category);

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button, TouchableOpacity, ScrollView} from 'react-native';
import styled, {css} from '@emotion/native';
import {Image} from 'react-native-elements';
import {Root, Container} from 'native-base';
import {listCategory} from '../../../redux/actions/category';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {failSafeImage} from '../../../consts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as tm from '../../theme.style';

const AdminCategory = props => {
  const {category} = props;
  const {dispatch, listCategory} = props;

  useEffect(() => {
    !category && dispatch(listCategory());
  }, [dispatch, category, listCategory]);

  return (
    <Root>
      <Container>
        <View>
          <View
            style={css`
              ${tm.paddingWalls}
            `}>
            <Button
              title="Add Category"
              type="outline"
              onPress={() => props.navigation.navigate('AddCategory')}
            />
            {console.log('category', category)}
            <ScrollView>
              {category &&
                category.map((item, key) => (
                  <View
                    key={key + 'adminCategory'}
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
                      <FontAwesome5
                        name={item.image || 'circle-notch'}
                        style={css`
                          font-size: 24px;
                          padding-bottom: 5px;
                        `}
                      />
                      {/*<Image
                      source={{
                        uri: item.image || failSafeImage,
                      }}
                      style={css`
                        height: 40px;
                        width: 40px;
                        margin: 0 5px;
                      `}
                    />*/}
                    </View>
                    <View
                      style={css`
                        padding-left: 5px;
                        flex: 3;
                      `}>
                      <Text
                        style={css`
                          font-size: 18px;
                        `}>
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={css`
                        padding-right: 5;
                      `}>
                      <TouchableOpacity
                        style={css``}
                        onPress={() =>
                          props.navigation.navigate('EditCategory', {
                            category: item,
                          })
                        }>
                        <Icon name="edit" size={30} />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
            </ScrollView>
          </View>
        </View>
      </Container>
    </Root>
  );
};

export default connect(
  state => ({
    category: state.category.categories,
  }),
  dispatch => ({dispatch, listCategory}),
)(AdminCategory);

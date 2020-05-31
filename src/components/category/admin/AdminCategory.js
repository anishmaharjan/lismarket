import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styled, { css } from '@emotion/native';
import { Image } from 'react-native-elements';
import { Root, Container } from 'native-base';
import { listCategory } from '../../../redux/actions/category';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const AdminCategory = props => {
  const { category } = props;
  const { dispatch, listCategory } = props;

  useEffect(() => {
    !category && dispatch(listCategory());
  }, [dispatch, category]);


  return (
    <Root>
      <Container>
        <View>
        <Button
            title="Add Category"
            type="outline"
            onPress={() => props.navigation.navigate('AddCategory')}
          />
          <ScrollView>
            {
              category && category.map((item, key) =>
                <View key={key} style={css`
                  padding: 12px 10px;
                  flex: 1;
                  flex-direction: row;
                  justify-content: space-between;
                  border-bottom-width: 1px;
                  border-bottom-color: #FF914D;
                  `}>
                  <View style={css` padding-left: 5px; flex: 1;`}>
                    <Image source={{ uri: 'https://localfoodconnect.org.au/wp-content/uploads/2015/09/tomato.png' }} style={css`
                    height: 40px;
                    width: 40px;
                    margin: 0 5px;
                    `} />
                  </View>
                  <View style={css` padding-left: 5px; flex: 3;`}>
                    <Text style={css`font-size: 18px;`}>{item.name}</Text>
                  </View>
                  <View style={css`
                      padding-right: 5;
                    `}>
                      <TouchableOpacity style={css`                  
                    `}  onPress={() => props.navigation.navigate('EditCategory',{category: item})}><Icon name="edit" size={30} /></TouchableOpacity>
                    </View>
                </View>
              )}
          </ScrollView>
        </View>
      </Container>
    </Root>
  )
};

export default connect(
  state => ({
    category: state.category.categories,
  }),
  dispatch => ({ dispatch, listCategory }),
)(AdminCategory);

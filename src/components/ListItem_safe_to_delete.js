import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Container } from 'native-base';

const ListItem_safe_to_delete = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={css.listItem}>
      <View style={css.listItemView}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ height: 100, width: 100 }}
            source={{
              uri:
                'http://icon-library.com/images/grocery-icon-png/grocery-icon-png-1.jpg',
            }}
          />
          <Text style={css.listItemText}>{item.text}</Text>
        </View>
        {/*<Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />*/}
      </View>
    </TouchableOpacity>
  );
};
const css = StyleSheet.create({
  listItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItem: {
    padding: 15,
    height: 150,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#eee',
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 15,
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem_safe_to_delete;

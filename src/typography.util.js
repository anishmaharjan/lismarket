import React from 'react';
import {Text, Platform, StyleSheet} from 'react-native';

export const typography = () => {
  const oldTextRender = Text.render;
  Text.render = function(...args) {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};

const styles = StyleSheet.create({
  defaultText: {
    color: '#4F4F4F',
    fontFamily:
      Platform.OS === 'ios' ? 'Montserrat-Regular' : 'Montserrat-Regular.ttf',
  },
});

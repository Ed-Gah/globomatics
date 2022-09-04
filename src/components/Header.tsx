import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../containers/styles/sharedStyles.js';

export const Header = (props) => {
  return (
    <View>
      <Image style={styles.imageSpeaker} source={props.image} />
      <Text style={props.style}>{props.heading}</Text>
    </View>
  );
};

import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../containers/styles/sharedStyles.js';

export const Footer = () => {
  return (
    <View style={styles.sectionContainer}>
      <Image style={styles.footerImage} source={require('../images/G.png')} />
      <Text style={styles.sectionDescription}> All rights reserved</Text>
    </View>
  );
};

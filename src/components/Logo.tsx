import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/logo_original.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
    textAlign: 'center',
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
});

export default memo(Logo);

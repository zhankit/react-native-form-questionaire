import * as React from 'react';
import { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';


const formB = () => {

  return (
    <View style={styles.container}></View>
  );
}
export default formB;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

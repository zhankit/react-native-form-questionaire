import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import DButton from '../../components/DButton';
import { Text, View } from '../../components/Themed/Themed';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({ 
  container: { 
    fontWeight: 'bold', 
    fontSize: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  mainContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4eee8'
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

interface HomeScreenProps {
  props: any
}

const HomeScreen = (props: HomeScreenProps) => {
  const navigation = useNavigation();
  const logoIcon =  require('../../assets/images/loader.gif');

  return (
  <View style={styles.mainContainer}>
    <Text style={styles.container}>Welcome to the demo of Dynamic React-Forms Component!</Text>
    <DButton style={{backgroundColor : 'black'}} title="Start" loading={false} type={'contrast'} onPress={ () => navigation.navigate('formCreation')}></DButton>
  </View>
  );
}
export default HomeScreen;

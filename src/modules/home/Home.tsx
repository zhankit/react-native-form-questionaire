import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import DButton from '../../components/DButton';
import { Text, View } from '../../components/Themed/Themed';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({ 
  container: { 
    fontWeight: 'bold', 
    fontSize: 30,
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  logo: {
    width: '200px',
    height: '200px'
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
  const logoIcon = require('../../assets/images/loader.gif');

  return (
  <View style={styles.mainContainer}>
    <Text style={styles.container}>Welcome to the demo of Dynamic React-Forms Component!</Text>
    <Image source={{ uri: logoIcon}} style={styles.logo} />
    <DButton style={{backgroundColor : 'black'}} title="Start" loading={false} onPress={ () => navigation.navigate('formCreation')}></DButton>
  </View>
  );
}
export default HomeScreen;

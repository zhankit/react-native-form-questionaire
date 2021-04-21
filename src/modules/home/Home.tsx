import * as React from 'react';
import { StyleSheet } from 'react-native';
import DButton from '../../components/DButton';
import { Text, View } from '../../components/Themed/Themed';
import { useNavigation } from '@react-navigation/native';

const stylesTitle = StyleSheet.create({ 
  container: { 
    fontWeight: 'bold', 
    fontSize: 30,
    paddingLeft: '20px',
    paddingRight: '20px',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
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

const DashboardHomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <Text style={stylesTitle.container}>Welcome to the demo of Dynamic React-Forms Component!</Text>
    <DButton title="Start" loading={false} onPress={ () => navigation.navigate('formCreation')}></DButton>
  </View>
  );
}
export default DashboardHomeScreen;

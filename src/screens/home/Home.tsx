import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import DButton from '../../components/DButton';
import { Text, View } from '../../components/Themed/Themed';
import { useNavigation } from '@react-navigation/native';
import { useTheme  } from 'react-native-paper';

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
  const { colors } = useTheme();

  return (
  <View style={{...styles.mainContainer, ...{ backgroundColor: colors.primary}}}>
    <Text style={{...styles.container, ...{ color: colors.text}}}>Welcome to the demo of Dynamic React-Forms Component!</Text>
    <DButton title="Start" loading={false} type={'contrast'} onPress={ () => navigation.navigate('formCreation')}></DButton>
  </View>
  );
}
export default HomeScreen;

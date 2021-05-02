import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import DButton from '../../components/DButton';
import { Text, View } from '../../components/Themed/Themed';
import { useNavigation } from '@react-navigation/native';
import { useTheme  } from 'react-native-paper';
import { styles } from './styles';



interface HomeScreenProps {
  props: any
}

const HomeScreen = (props: HomeScreenProps) => {

  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
  <View style={{...styles.mainContainer, ...{ backgroundColor: colors.primary}}}>
    <Text style={{...styles.container, ...{ color: colors.text}}}>Welcome to the demo of Dynamic React-Forms Component!</Text>
    <DButton title="Start" type={'contrast'} onPress={ () => navigation.navigate('FormCreation')}></DButton>
  </View>
  );
}
export default HomeScreen;

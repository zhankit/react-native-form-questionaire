import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import DButton from '../../components/DButton';
import { Text, View } from '../../components/Themed/Themed';
import { useNavigation } from '@react-navigation/native';
import { useTheme  } from 'react-native-paper';
import { styles } from './styles';
import { FormReducersProps, formConnector } from '../../redux/actions/actions';



const HomeScreen = (props: FormReducersProps) => {

  const navigation = useNavigation();
  const { colors } = useTheme();


  return (
  <View style={{...styles.mainContainer, ...{ backgroundColor: colors.primary}}}>
    <Text style={{...styles.container, ...{ color: colors.text}}}>Welcome to the demo of Dynamic React-Forms Component!</Text>
    <DButton title="Start" isDisabled={false} type={'contrast'} onPress={ () => navigation.navigate('FormCreation')}></DButton>
    {/* { props.formLength() && <View style={{ paddingTop: 20, backgroundColor: colors.primary}}></View>} */}

    <View style={{ paddingTop: 20, backgroundColor: colors.primary}}>
      <DButton title="Get Joke" isDisabled={false} type={'contrast'} 
      onPress={ () => props.getJoke()}></DButton>
      {
        props.state.loading && <Text>{props.state.joke.toString()}</Text>
      }
    </View>
  </View>
  );
}
export default formConnector(HomeScreen);

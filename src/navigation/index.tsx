import * as React from 'react';
import { ColorSchemeName, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import LinkingConfiguration from './LinkingConfiguration';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../modules/home';
import form from '../modules/form';
import formCreation from '../modules/formCreation';

const styles= StyleSheet.create({
  headerTextStyle: {
    fontWeight: "bold", 
    fontFamily: "lobster", 
    fontSize: 28,
    letterSpacing:1
  }
})
// This is the state mapping
interface NavigationProps {
  colorScheme: ColorSchemeName
}

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = ( props: NavigationProps ) => {

  const Stack = createStackNavigator();

  return (
  <NavigationContainer
    theme={props.colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitleStyle: styles.headerTextStyle, title: 'Home' }}/>
      <Stack.Screen name="form" component={form} options={{ headerTitleStyle: styles.headerTextStyle, title: 'Customized Form' }}/>
      <Stack.Screen name="formCreation" component={formCreation} options={{ headerTitleStyle: styles.headerTextStyle, title: 'Form Creation' }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Navigation;


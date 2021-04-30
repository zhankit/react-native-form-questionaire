import * as React from 'react';
import { ColorSchemeName, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import LinkingConfiguration from './LinkingConfiguration';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/home';
import form from '../screens/form';
import formCreation from '../screens/formCreation';

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

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card:  '#f4eee8',
  },
};


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = ( props: NavigationProps ) => {

  const Stack = createStackNavigator();

  return (
  <NavigationContainer theme={MyTheme}>
  <Stack.Navigator 
    initialRouteName="Home" 
    screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: 'black',
    }}>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ headerTitleStyle: styles.headerTextStyle, title: 'Home' }}/>
      <Stack.Screen 
        name="form" 
        component={form} 
        options={{ headerTitleStyle: styles.headerTextStyle, title: '' }}/>
      <Stack.Screen 
        name="formCreation" 
        component={formCreation}
         options={{ headerTitleStyle: styles.headerTextStyle, title: '' }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Navigation;


import * as React from 'react';
import { ColorSchemeName, StyleSheet} from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import LinkingConfiguration from './LinkingConfiguration';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/home';
import form from '../screens/form';
import formCreation from '../screens/formCreation';
import { Theme } from 'react-native-paper/lib/typescript/types';
import { color } from 'react-native-reanimated';
import componentCreation from '../screens/textfieldForm';
import textfieldForm from '../screens/textfieldForm';
import numberfieldForm from '../screens/numberfieldForm';
import toggleFieldForm from '../screens/toggleFieldForm';
import checkboxForm from '../screens/checkboxForm';

const styles= StyleSheet.create({
  headerTextStyle: {
    fontWeight: "bold", 
    fontFamily: "lobster", 
    fontSize: 28,
    letterSpacing: 1,
    color: 'black'
  }
});

// This is the state mapping
interface NavigationProps {
  theme: Theme
}

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = ( props: NavigationProps ) => {

  const Stack = createStackNavigator();

  return (
  <NavigationContainer theme={props.theme}>
    <Stack.Navigator 
      initialRouteName="Home" 
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: props.theme.colors.text,
        headerStyle: { backgroundColor: props.theme.colors.primary},
        
      }}>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Home' }}/>
      <Stack.Screen 
        name="form" 
        component={form} 
        options={{ title: '' }}/>
      <Stack.Screen 
        name="formCreation" 
        component={formCreation}
         options={{ title: 'Dynamic Form' }}/>
      <Stack.Screen 
        name="textfieldForm" 
        component={textfieldForm}
         options={{ title: '' }}/>
      <Stack.Screen 
        name="numberfieldForm" 
        component={numberfieldForm}
         options={{ title: '' }}/>
      <Stack.Screen 
        name="toggleFieldForm" 
        component={toggleFieldForm}
         options={{ title: '' }}/>
      <Stack.Screen 
        name="checkboxForm" 
        component={checkboxForm}
         options={{ title: '' }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Navigation;


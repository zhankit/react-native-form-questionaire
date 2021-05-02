import * as React from 'react';
import { ColorSchemeName, StyleSheet} from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import LinkingConfiguration from './LinkingConfiguration';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/home';
import form from '../screens/form';
import FormCreation from '../screens/FormCreation';
import { Theme } from 'react-native-paper/lib/typescript/types';
import { color } from 'react-native-reanimated';
import componentCreation from '../screens/TextfieldForm';
import TextfieldForm from '../screens/TextfieldForm';
import NumberfieldForm from '../screens/NumberfieldForm';
import ToggleFieldForm from '../screens/ToggleFieldForm';
import CheckboxForm from '../screens/CheckboxForm';

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
        headerTitleStyle : styles.headerTextStyle
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
        name="FormCreation" 
        component={FormCreation}
         options={{ title: 'Dynamic Form' }}/>
      <Stack.Screen 
        name="TextfieldForm" 
        component={TextfieldForm}
         options={{ title: '' }}/>
      <Stack.Screen 
        name="NumberfieldForm" 
        component={NumberfieldForm}
         options={{ title: '' }}/>
      <Stack.Screen 
        name="ToggleFieldForm" 
        component={ToggleFieldForm}
         options={{ title: '' }}/>
      <Stack.Screen 
        name="CheckboxForm" 
        component={CheckboxForm}
         options={{ title: '' }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Navigation;


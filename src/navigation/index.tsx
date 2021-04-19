import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ColorSchemeName, StyleSheet , Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import DashboardHomeScreen from '../modules/home/Home';
import formA from '../modules/formA/formA';
import formB from '../modules/formB/formB';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import LinkingConfiguration from './LinkingConfiguration';

// This is the state mapping
interface NavigationProps {
  colorScheme: ColorSchemeName
}

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = ( props: NavigationProps ) => {
  
  // console.log('colorScheme',colorScheme);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={props.colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <RootNavigator />
    </NavigationContainer>
  );
}

export default Navigation;


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const Stack = createStackNavigator();
const RootNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: 'Home' }}>
          {props => <DashboardHomeScreen {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="formA" component={formA} options={{ title: 'Form A' }}/>
        <Stack.Screen name="formB" component={formB} options={{ title: 'Form B' }}/>
      </Stack.Navigator>
    );
  }
  

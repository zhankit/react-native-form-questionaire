import * as React from 'react';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home';
import form from '../screens/form';
import FormCreation from '../screens/formCreation';
import { Theme } from 'react-native-paper/lib/typescript/types';
import TextfieldForm from '../screens/textfieldForm';
import NumberfieldForm from '../screens/numberfieldForm';
import ToggleFieldForm from '../screens/toggleFieldForm';
import CheckboxForm from '../screens/checkboxForm';

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


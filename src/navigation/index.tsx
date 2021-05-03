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
import FormCart from '../screens/formCart';

const styles= StyleSheet.create({
  headerTextStyle: {
    fontWeight: "bold", 
    fontFamily: "lobster", 
    fontSize: 28,
    letterSpacing: 1,
    color: 'black'
  }
});

interface NavigationProps {
  theme: Theme
}

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = ( props: NavigationProps ) => {

  const MainStack = createStackNavigator();
  const RootStack = createStackNavigator();

  const MainStackScreen = () => {
    return (
      <MainStack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: props.theme.colors.text,
          headerStyle: { backgroundColor: props.theme.colors.primary},
          headerTitleStyle : styles.headerTextStyle
        }}>
        <MainStack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <MainStack.Screen name="Form" component={form} options={{ title: '' }}/>
        <MainStack.Screen name="FormCreation" component={FormCreation} options={{ title: 'Dynamic Form' }}/>
        <MainStack.Screen name="FormCart" component={FormCart} options={{ title: 'Forms Cart' }}/>
      </MainStack.Navigator>
    )
  }
  return (
    <NavigationContainer theme={props.theme}>
      <RootStack.Navigator 
        mode="modal"
        initialRouteName="Home" 
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: props.theme.colors.text,
          headerStyle: { backgroundColor: props.theme.colors.primary},
          headerTitleStyle : styles.headerTextStyle
        }}>
        <RootStack.Screen name="Home" component={MainStackScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="TextfieldForm" component={TextfieldForm} options={{ title: '' }}/>
        <RootStack.Screen name="NumberfieldForm" component={NumberfieldForm} options={{ title: '' }}/>
        <RootStack.Screen name="ToggleFieldForm" component={ToggleFieldForm} options={{ title: '' }}/>
        <RootStack.Screen name="CheckboxForm" component={CheckboxForm} options={{ title: '' }}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;


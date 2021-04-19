import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../assets/constants/Colors';
import useColorScheme from '../assets/hooks/useColorScheme';
import { Alert, StyleSheet } from 'react-native';
import { Button, IconButton } from '@material-ui/core';
import { RootStackParamList } from './types';
import { DashboardHomeScreen } from '../modules/home/Home';

const AppTabNavigator = () => {
  const colorScheme = useColorScheme();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles= StyleSheet.create({
  headerTextStyle: {
    fontWeight: "bold", 
    fontFamily: "lobster", 
    fontSize: 28,
    letterSpacing:1
  }
})
export default AppTabNavigator;

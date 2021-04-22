import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Navigation from './src/navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import useCachedResources from './src/assets/hooks/useCachedResources';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/modules/home';

const App = () => {

  // const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();
  const Stack = createStackNavigator();   
  if (!isLoadingComplete) {
    return null;
  } 
  else {
      return (
      // <Provider store={store}>
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="walao" component={HomeScreen}></Stack.Screen>
      //   </Stack.Navigator>
      // </NavigationContainer>
        <PaperProvider>
         <Navigation colorScheme={null} />
         <StatusBar />
        </PaperProvider>
      // </Provider>
    );
  }
}

export default App;
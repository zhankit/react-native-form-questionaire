import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './src/navigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import useCachedResources from './src/assets/hooks/useCachedResources';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, connect } from 'react-redux';
import { SafeAreaView, useColorScheme } from 'react-native';
// import { store } from './src/redux/store/store';

const App = () => {

  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();
  const Stack = createStackNavigator();   
  if (!isLoadingComplete) {
    return null;
  } 
  else {
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4eee8'}}>
          <PaperProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar backgroundColor="black"/>
          </PaperProvider>
        </SafeAreaView>
    );
  }
}

export default App;
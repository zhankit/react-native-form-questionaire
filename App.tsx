import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Navigation from './src/navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import useCachedResources from './src/assets/hooks/useCachedResources';

const App = () => {

  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
      return (
      // <Provider store={store}>
        <PaperProvider>
          <Navigation colorScheme={null} />
          <StatusBar />
        </PaperProvider>
      // </Provider>
    );
  }
}

export default App;